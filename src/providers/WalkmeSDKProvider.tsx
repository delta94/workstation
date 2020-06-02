import React, { createContext, useEffect, useState } from 'react';
import walkme from '@walkme/sdk';

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

  useEffect(() => {
    (async function init() {
      try {
        await walkme.init();
        const [wmSearch, wmNotifications, uiTreeSDK, languagesSDK] = await Promise.all([
          walkme.apps.getApp('search'),
          walkme.apps.getApp('notifications'),
          walkme.content.getContentUITree(),
          walkme.language.getLanguagesList(),
        ]);
        const notifications = await wmNotifications.getNotifications();
        const tabTypes = (walkme.content as any).TabTypes;

        setLoading(false);
        setSdk({
          wmSearch,
          wmNotifications,
          notifications,
          uiTreeSDK,
          tabTypes,
          languagesSDK,
        });
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return <WalkmeSDKContext.Provider value={sdk}>{sdk ? children : 'Loading'}</WalkmeSDKContext.Provider>;
}
