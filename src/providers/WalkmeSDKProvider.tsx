import React, { createContext, useEffect, useState } from 'react';
import walkme from '@walkme/sdk';

type AppPropTypes = { children: React.ReactNode };
type WalkmeSdkContextTypes = { wmSearch: object; wmNotifications: object; uiTreeSDK: object; languagesSDK: object };

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
        setSdk({ wmSearch, wmNotifications, uiTreeSDK, languagesSDK });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return <WalkmeSDKContext.Provider value={sdk}>{sdk ? children : 'Loading'}</WalkmeSDKContext.Provider>;
}
