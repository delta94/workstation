import React, { createContext, useEffect, useState } from 'react';
import walkme from '@walkme/sdk';

import Loader from '../components/StateScreens/Loader';
import NoConnection from '../components/StateScreens/NoConnection';

type AppPropTypes = { children: React.ReactNode };
type WalkmeSdkContextTypes = {
  wmSearch: object;
  wmNotifications: object;
  notifications: object;
  uiTreeSDK: object;
  tabTypes: object;
  languagesSDK: object;
};

export const WalkmeSDKContext = createContext<WalkmeSdkContextTypes | null>(null);

export default function WalkmeSDKProvider({ children }: AppPropTypes) {
  const [sdk, setSdk] = useState<WalkmeSdkContextTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function getChildren(): React.ReactNode {
    switch (true) {
      case loading:
        return <Loader style={{ height: '100vh' }} />;
      case error:
        return <NoConnection style={{ height: '100vh' }} />;
      case !!sdk:
        return children;
      default:
        return <NoConnection style={{ height: '100vh' }} />;
    }
  }

  async function getAppData() {
    const [wmSearch, wmNotifications, uiTreeSDK, languagesSDK] = await Promise.all([
      walkme.apps.getApp('search'),
      walkme.apps.getApp('notifications'),
      walkme.content.getContentUITree(),
      walkme.language.getLanguagesList(),
    ]);
    const notifications = await wmNotifications.getNotifications();
    const tabTypes = (walkme.content as any).TabTypes;

    setSdk({
      wmSearch,
      wmNotifications,
      notifications,
      uiTreeSDK,
      tabTypes,
      languagesSDK,
    });
  }

  async function handleBeforeOpen() {
    setLoading(true);
    setError(false);

    try {
      await getAppData();
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  function handleBeforeClose() {
    setError(false);
    setTimeout(() => {
      setLoading(true);
    }, 200);
  }

  function setAppListeners() {
    const { BeforeOpen, BeforeClose } = (walkme.events as any).EventTypes;

    walkme.events.off(BeforeOpen, handleBeforeOpen);
    walkme.events.off(BeforeClose, handleBeforeClose);

    walkme.events.on(BeforeOpen, handleBeforeOpen);
    walkme.events.on(BeforeClose, handleBeforeClose);
  }

  useEffect(() => {
    (async function init() {
      try {
        await walkme.init();
        await getAppData();
        setAppListeners();

        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return <WalkmeSDKContext.Provider value={sdk}>{getChildren()}</WalkmeSDKContext.Provider>;
}
