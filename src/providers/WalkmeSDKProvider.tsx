import React, { createContext, useEffect, useReducer } from 'react';
// @ts-ignore
import cloneDeep from 'lodash/cloneDeep';
import walkme from '@walkme/sdk';

import Loader from '../components/StateScreens/Loader';
import NoConnection from '../components/StateScreens/NoConnection';

import { AppPropTypes, Platform, WalkmeSdk, WalkmeSdkContextValue, Action, AppState } from './types';
import classes from './styles.module.scss';

const initialState: AppState = {
  sdk: {
    wmSearch: {},
    wmNotifications: {},
    notifications: {},
    uiTreeSDK: {},
    tabTypes: {},
    languagesSDK: {},
    platform: {},
  },
  ui: {
    loading: true,
    error: false,
  },
};

function reducer(state: AppState, action: Action): AppState {
  const draft = cloneDeep(state);

  switch (action.type) {
    case 'updateSdk':
      return { ...draft, ui: { ...draft.ui, loading: true, error: false } };
    case 'updateSdkSuccess':
      return { ...draft, sdk: action.sdk, ui: { ...draft.ui, loading: false, error: false } };
    case 'updateSdkError':
      return { ...draft, ui: { ...draft.ui, loading: false, error: true } };
    case 'initLocation':
      return { ...draft, ui: { ...draft.ui, location: action.location, previousLocation: action.location } };
    case 'updateLocationHistory':
      return { ...draft, ui: { ...draft.ui, location: action.location, previousLocation: draft.ui.location } };
    case 'updateLocation':
      return { ...draft, ui: { ...draft.ui, location: action.location } };
    case 'toggleLocation':
      return {
        ...draft,
        ui: { ...draft.ui, location: draft.ui.previousLocation, previousLocation: draft.ui.location },
      };
    case 'handleBeforeClose':
      return { ...draft, ui: { ...draft.ui, loading: true, error: false } };
    default:
      return state;
  }
}

export const WalkmeSDKContext = createContext<WalkmeSdkContextValue | null>(null);

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

async function getSdk() {
  const [wmSearch, wmNotifications, uiTreeSDK, languagesSDK] = await Promise.all([
    walkme.apps.getApp('search'),
    walkme.apps.getApp('notifications'),
    walkme.content.getContentUITree(),
    walkme.language.getLanguagesList(),
  ]);
  const notifications = await wmNotifications.getNotifications();
  const tabTypes = (walkme.content as any).TabTypes;

  return {
    wmSearch,
    wmNotifications,
    notifications,
    uiTreeSDK,
    tabTypes,
    languagesSDK,
    platform: getPlatform(),
  };
}

function getInitialLocation(sdk: WalkmeSdk) {
  const tabType = (sdk.uiTreeSDK as any)[0].properties.tabType;
  return { contentType: tabType, index: 0 };
}

export default function WalkmeSDKProvider({ children }: AppPropTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function getChildren(): React.ReactNode {
    switch (true) {
      case state.ui.loading:
        return <Loader style={{ height: '100vh' }} />;
      case state.ui.error:
        return <NoConnection style={{ height: '100vh' }} />;
      case !!state.sdk:
        return children;
      default:
        return <NoConnection style={{ height: '100vh' }} />;
    }
  }

  async function handleBeforeOpen() {
    try {
      dispatch({ type: 'updateSdk' });
      const sdk = await getSdk();
      dispatch({ type: 'updateSdkSuccess', sdk });
    } catch (error) {
      dispatch({ type: 'updateSdkError' });
    }
  }

  function handleBeforeClose() {
    dispatch({ type: 'handleBeforeClose' });
  }

  function setAppListeners() {
    const { BeforeOpen, BeforeClose } = (walkme.events as any).EventTypes;

    walkme.events.on(BeforeOpen, handleBeforeOpen);
    walkme.events.on(BeforeClose, handleBeforeClose);
  }

  useEffect(() => {
    (async function init() {
      try {
        dispatch({ type: 'updateSdk' });
        const sdk = await getSdk();
        const location = getInitialLocation(sdk);
        dispatch({ type: 'initLocation', location });
        dispatch({ type: 'updateSdkSuccess', sdk });
        setAppListeners();
      } catch (error) {
        dispatch({ type: 'updateSdkError' });
      }
    })();
  }, []);

  return (
    <WalkmeSDKContext.Provider value={{ state, dispatch }}>
      {(state.sdk?.platform as any).isWindows ? (
        <div className={classes['platform-windows']}>{getChildren()}</div>
      ) : (
        getChildren()
      )}
    </WalkmeSDKContext.Provider>
  );
}
