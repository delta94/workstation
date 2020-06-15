import React, { createContext, useEffect, useState } from 'react';
import walkme from '@walkme/sdk';

import Loader from '../components/StateScreens/Loader';
import NoConnection from '../components/StateScreens/NoConnection';

import classes from './styles.module.scss';

type AppPropTypes = { children: React.ReactNode };
type WalkmeSdkContextTypes = {
  wmSearch: object;
  wmNotifications: object;
  notifications: object;
  uiTreeSDK: object;
  tabTypes: object;
  languagesSDK: object;
  platform: Platform;
};
type Platform = {
  isWindows: boolean;
  isMac: boolean;
  isWeb: boolean;
  isMock: boolean;
  platform: object;
  platformTypes: object;
};

export const WalkmeSDKContext = createContext<WalkmeSdkContextTypes | null>(null);

function getPlatform(): Platform {
  const { Windows, Mac, Web, Mock } = (walkme as any).platform?.PlatformTypes ?? {};

  return {
    isWindows: (walkme as any).platformType === Windows,
    isMac: (walkme as any).platformType === Mac,
    isWeb: (walkme as any).platformType === Web,
    isMock: (walkme as any).platformType === Mock,
    platform: walkme as any,
    platformTypes: (walkme as any).platform?.PlatformTypes,
  };
}

export default function WalkmeSDKProvider({ children }: AppPropTypes) {
  const [sdk, setSdk] = useState<WalkmeSdkContextTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function getChildren(): React.ReactNode {
    switch (true) {
      case !sdk:
        return <div style={{ height: '100vh', backgroundColor: 'var(--background)' }} />;
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
      platform: getPlatform(),
    });
  }

  async function handleBeforeOpen() {
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
    }, 100);
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

  return (
    <WalkmeSDKContext.Provider value={sdk}>
      {sdk?.platform.isWindows ? <div className={classes['platform-windows']}>{getChildren()}</div> : getChildren()}
    </WalkmeSDKContext.Provider>
  );
}
