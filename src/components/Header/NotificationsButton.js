import React, { useContext, useEffect, useState } from 'react';
import cc from 'classcat';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';
import IconButton from '../IconButton';

import { ReactComponent as NotificationsIcon } from './icons/notifications.svg';
import classes from './styles.module.scss';

export default function NotificationsButton({ onSelectSection, onDeselectSection, activeSection }) {
  const {
    state: {
      sdk: { notifications },
    },
  } = useContext(WalkmeSDKContext);

  const [hasNotifications, setHasNotifications] = useState(false);
  const [isShowingNotifications, setIsShowingNotifications] = useState(false);

  function onToggleNotifications() {
    if (!isShowingNotifications) {
      onSelectSection({ contentType: 'notifications' });
    } else {
      onDeselectSection();
    }

    setIsShowingNotifications(!isShowingNotifications);
  }

  useEffect(() => {
    if (activeSection?.contentType !== 'notifications') {
      setIsShowingNotifications(false);
    } else {
      setIsShowingNotifications(true);
    }
  }, [activeSection]);

  useEffect(() => {
    const hasNewNotifications = notifications.some((notification) => !notification.properties.isPlayed);
    setHasNotifications(hasNewNotifications);
  }, [notifications]);

  return (
    <IconButton
      onClick={onToggleNotifications}
      toggleOn={isShowingNotifications}
      className={cc([
        classes['icon-button'],
        classes['notification-icon'],
        { [classes['has-notifications']]: hasNotifications, [classes['is-active']]: isShowingNotifications },
      ])}
    >
      <NotificationsIcon />
    </IconButton>
  );
}
