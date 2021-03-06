import React, { useContext, useEffect, useState } from 'react';
import format from 'date-fns/format';
import cc from 'classcat';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import EmptyNotifications from '../StateScreens/EmptyNotifications';

import { ReactComponent as BellIcon } from './bell.svg';
import classes from './styles.module.scss';
import { updateNotifications } from './utils';
import Loader from '../StateScreens/Loader';

export default function NotificationList() {
  const {
    state: {
      sdk: { wmNotifications, notifications, isLoadingNotifications },
    },
    dispatch,
  } = useContext(WalkmeSDKContext);

  useEffect(() => {
    updateNotifications(wmNotifications, dispatch);
  }, []);

  function parseDate(date) {
    const parsedDate = new Date(Date.parse(date));
    return format(parsedDate, 'd.M.y | h:mma');
  }

  return (
    <>
      {isLoadingNotifications && <Loader />}

      {notifications?.length ? (
        <div className={classes.notifications}>
          <div className={classes['notifications-list-title']}>Newest notifications</div>
          <ul className={classes['notifications-list']}>
            {notifications.map((node) => (
              <li
                key={node.id}
                className={cc([classes.notification, { [classes['is-new']]: !node.properties.isPlayed }])}
                onClick={() => wmNotifications.playNotification(node.id)}
              >
                <div className={classes['notification-icon']}>
                  <BellIcon />
                </div>
                <div>
                  <div className={classes.title}>{node.title}</div>
                  <div className={classes.date}>{parseDate(node.properties.date)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <EmptyNotifications />
      )}
    </>
  );
}
