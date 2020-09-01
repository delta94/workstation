import React, { createContext, useEffect, useReducer } from 'react';
import walkme from '@walkme/sdk';

import Loader from '../components/StateScreens/Loader';
import NoConnection from '../components/StateScreens/NoConnection';

import { AppPropTypes, Platform, WalkmeSdk, WalkmeSdkContextValue, Action } from './types';
import reducer, {
  HANDLE_BEFORE_CLOSE,
  INIT_LOCATION,
  initialState,
  UPDATE_SDK,
  UPDATE_SDK_ERROR,
  UPDATE_SDK_SUCCESS,
  NOTIFICATIONS_RECEIVED,
} from './reducer';
import classes from './styles.module.scss';
import { updateNotifications } from '../components/NotificationList/utils';

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

async function getSdk(dispatch: (value: Action) => void) {
  const [wmSearch, wmNotifications, uiTreeSDK, languagesSDK] = await Promise.all([
    walkme.apps.getApp('search'),
    walkme.apps.getApp('notifications'),
    walkme.content.getContentUITree(),
    walkme.language.getLanguagesList(),
  ]);

  updateNotifications(wmNotifications, dispatch);

  const tabTypes = (walkme.content as any).TabTypes;

  return {
    wmSearch,
    wmNotifications,
    notifications: [],
    uiTreeSDK,
    tabTypes,
    languagesSDK,
    platform: getPlatform(),
    isLoadingNotifications: false,
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
      dispatch({ type: UPDATE_SDK });
      const sdk = await getSdk(dispatch);
      dispatch({ type: UPDATE_SDK_SUCCESS, sdk });
    } catch (error) {
      dispatch({ type: UPDATE_SDK_ERROR, error });
    }
  }

  function handleBeforeClose() {
    dispatch({ type: HANDLE_BEFORE_CLOSE });
  }

  function setAppListeners() {
    const { BeforeOpen, BeforeClose } = (walkme.events as any).EventTypes;

    walkme.events.on(BeforeOpen, handleBeforeOpen);
    walkme.events.on(BeforeClose, handleBeforeClose);
  }

  useEffect(() => {
    (async function init() {
      try {
        dispatch({ type: UPDATE_SDK });
        const sdk = await getSdk(dispatch);
        const location = getInitialLocation(sdk);
        dispatch({ type: INIT_LOCATION, location });
        dispatch({ type: UPDATE_SDK_SUCCESS, sdk });
        setAppListeners();
      } catch (error) {
        dispatch({ type: UPDATE_SDK_ERROR, error });
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
