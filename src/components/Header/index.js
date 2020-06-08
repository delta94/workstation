import React, { useContext, useEffect, useState } from 'react';
import walkme from '@walkme/sdk';
import cc from 'classcat';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import IconButton from '../IconButton';
import SearchInput from '../SearchInput';
import Logo from '../Logo';
import HeaderMenu from '../HeaderMenu';

import { ReactComponent as NotificationsIcon } from './icons/notifications.svg';
import { ReactComponent as DotsIcon } from './icons/dots.svg';
import { ReactComponent as FullscreenIcon } from './icons/fullscreen.svg';
import classes from './styles.module.scss';

export default function Header({ onSelectSection, onDeselectSection, activeSection }) {
  const { notifications } = useContext(WalkmeSDKContext);
  const [hasNotifications, setHasNotifications] = useState(false);
  const [isShowingNotifications, setIsShowingNotifications] = useState(false);

  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onMinimizeClick() {
    walkme.platform.closeMe();
  }

  function onToggleNotifications() {
    if (!isShowingNotifications) {
      onSelectSection({ contentType: 'notifications', content: notifications });
    } else {
      onDeselectSection();
    }

    setIsShowingNotifications(!isShowingNotifications);
  }

  function onSearchTermChange(searchTerm) {
    onSelectSection({ contentType: 'search', content: searchTerm });
  }

  useEffect(() => {
    const hasNewNotifications = notifications.some((notification) => !notification.properties.isPlayed);
    setHasNotifications(hasNewNotifications);
  }, [notifications]);

  useEffect(() => {
    if (activeSection?.contentType !== 'notifications') {
      setIsShowingNotifications(false);
    } else {
      setIsShowingNotifications(true);
    }
  }, [activeSection]);

  return (
    <section className={cc([classes.header, { [classes['search-focus']]: isSearchFocus }])}>
      <Logo className={classes.logo} />
      <div className={classes['search-input-wrapper']}>
        <SearchInput onFocusChange={setIsSearchFocus} onChange={onSearchTermChange} />
      </div>
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
      <div className={cc([classes['menu-container'], classes['icon-button']])}>
        <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <DotsIcon />
        </IconButton>
        <HeaderMenu
          setIsOpen={setIsMenuOpen}
          className={cc([classes['header-menu'], { [classes.show]: isMenuOpen }])}
        />
      </div>

      <IconButton className={classes['icon-button']} onClick={onMinimizeClick}>
        <FullscreenIcon />
      </IconButton>
    </section>
  );
}
