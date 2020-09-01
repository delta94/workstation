// @ts-ignore
import cloneDeep from 'lodash/cloneDeep';
import { Action, AppState } from './types';

export const UPDATE_SDK = 'updateSdk';
export const UPDATE_SDK_SUCCESS = 'updateSdkSuccess';
export const UPDATE_SDK_ERROR = 'updateSdkError';
export const INIT_LOCATION = 'initLocation';
export const UPDATE_LOCATION_HISTORY = 'updateLocationHistory';
export const UPDATE_LOCATION = 'updateLocation';
export const TOGGLE_LOCATION = 'toggleLocation';
export const HANDLE_BEFORE_CLOSE = 'handleBeforeClose';
export const NOTIFICATIONS_RECEIVED = 'notificationsReceived';
export const LOADING_NOTIFICATIONS = 'loadingNotifications';

export const initialState: AppState = {
  sdk: {
    wmSearch: {},
    wmNotifications: {},
    notifications: [],
    isLoadingNotifications: false,
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

export default function reducer(state: AppState, action: Action): AppState {
  const draft = cloneDeep(state);

  switch (action.type) {
    case UPDATE_SDK:
      return { ...draft, ui: { ...draft.ui, loading: true, error: false } };
    case UPDATE_SDK_SUCCESS:
      return { ...draft, sdk: action.sdk, ui: { ...draft.ui, loading: false, error: false } };
    case UPDATE_SDK_ERROR:
      console.error(action.error);
      return { ...draft, ui: { ...draft.ui, loading: false, error: true } };
    case INIT_LOCATION:
      return { ...draft, ui: { ...draft.ui, location: action.location, previousLocation: action.location } };
    case UPDATE_LOCATION_HISTORY:
      return { ...draft, ui: { ...draft.ui, location: action.location, previousLocation: draft.ui.location } };
    case UPDATE_LOCATION:
      return { ...draft, ui: { ...draft.ui, location: action.location } };
    case TOGGLE_LOCATION:
      return {
        ...draft,
        ui: { ...draft.ui, location: draft.ui.previousLocation, previousLocation: draft.ui.location },
      };
    case HANDLE_BEFORE_CLOSE:
      return { ...draft, ui: { ...draft.ui, loading: true, error: false } };

    case LOADING_NOTIFICATIONS:
      return {
        ...draft,
        sdk: {
          ...draft.sdk,
          isLoadingNotifications: true,
        },
      };
    case NOTIFICATIONS_RECEIVED:
      return {
        ...draft,
        sdk: {
          ...draft.sdk,
          isLoadingNotifications: false,
          notifications: action.notifications ?? [],
        },
      };
    default:
      return state;
  }
}
