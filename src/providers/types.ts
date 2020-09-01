import React from 'react';
import walkme from '@walkme/sdk';

export type AppPropTypes = { children: React.ReactNode };

export type Platform = {
  isWindows: boolean;
  isMac: boolean;
  isWeb: boolean;
  isMock: boolean;
  platform: object;
  platformTypes: object;
};

export type Location =
  | {
      index?: number;
      searchTerm?: string;
      // @ts-ignore
      contentType: walkme.content.TabTypes | 'search' | 'notifications' | '';
    }
  | null
  | undefined;

export type Ui = {
  location?: Location;
  previousLocation?: Location;
  loading: boolean;
  error: boolean;
};

export type WalkmeSdk = {
  wmSearch: object | {};
  wmNotifications: object | {};
  notifications: Array<object> | {};
  isLoadingNotifications: boolean;
  uiTreeSDK: Array<object> | {};
  tabTypes: object | {};
  languagesSDK: object | {};
  platform: Platform | {};
};

export type AppState = {
  sdk: WalkmeSdk;
  ui: Ui;
};

export type Action = { type: string; sdk?: WalkmeSdk; location?: Location; error?: string; notifications?: Array<any> };

export type WalkmeSdkContextValue = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};
