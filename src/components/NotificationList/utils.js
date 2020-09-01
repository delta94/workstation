import { NOTIFICATIONS_RECEIVED, LOADING_NOTIFICATIONS } from '../../providers/reducer';

export async function updateNotifications(wmNotifications, dispatch) {
  dispatch({ type: LOADING_NOTIFICATIONS });
  const notifications = await wmNotifications.getNotifications();
  dispatch({ type: NOTIFICATIONS_RECEIVED, notifications });
}
