import React from 'react';

import { ReactComponent as EmptyNotificationsIcon } from './icons/no-notifications.svg';
import StateScreen from './StateScreen';

export default function EmptyNotifications() {
  return (
    <StateScreen iconComponent={EmptyNotificationsIcon}>
      <div>No notifications</div>
    </StateScreen>
  );
}
