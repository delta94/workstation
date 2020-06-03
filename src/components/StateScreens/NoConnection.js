import React from 'react';

import StateScreen from './StateScreen';
import { ReactComponent as EmptyNotificationsIcon } from './icons/no-notifications.svg';
import classes from './styles.module.scss';

export default function EmptyNotifications() {
  return (
    <StateScreen iconComponent={EmptyNotificationsIcon}>
      <div>WalkMe can’t load due to internet connection</div>
      <div className={classes['state-screen-sub-text']}>
        Check your connection and try again or contact your IT department
      </div>
    </StateScreen>
  );
}
