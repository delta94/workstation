import React, { useContext } from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import cc from 'classcat';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import EmptyNotifications from '../StateScreens/EmptyNotifications';

import { ReactComponent as BellIcon } from './bell.svg';
import classes from './styles.module.scss';

export default function NotificationList() {
  const { wmNotifications, notifications } = useContext(WalkmeSDKContext);

  return (
    <>
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
                  <div className={classes.date}>{format(parseISO(node.properties.date), 'd.M.y | h:mma')}</div>
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
