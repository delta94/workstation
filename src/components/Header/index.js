import React, { useContext, useState } from 'react';
import walkme from '@walkme/sdk';
import cc from 'classcat';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import IconButton from '../IconButton';
import SearchInput from '../SearchInput';
import Logo from '../Logo';
import HeaderMenu from '../HeaderMenu';

import NotificationsIcon from '../icon-components/NotificationsIcon';
import DotsIcon from '../icon-components/DotsIcon';
import FullscreenIcon from '../icon-components/FullscreenIcon';
import classes from './styles.module.scss';

export default function Header({ onSelectSection }) {
  const { notifications } = useContext(WalkmeSDKContext);

  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShowingNotifications, setIsShowingNotifications] = useState(false);

  function onMinimizeClick() {
    walkme.platform.closeMe();
  }

  function onToggleNotifications() {
    if (!isShowingNotifications) {
      onSelectSection({ contentType: 'notifications', content: notifications });
    }

    setIsShowingNotifications(!isShowingNotifications);
  }

  return (
    <section className={cc([classes.header, { [classes['search-focus']]: isSearchFocus }])}>
      <Logo className={classes.logo} />
      <div className={classes['search-input-wrapper']}>
        <SearchInput onFocusChange={setIsSearchFocus} />
      </div>
      <IconButton onClick={onToggleNotifications} toggleOn={isShowingNotifications}>
        <NotificationsIcon />
      </IconButton>
      <div className={classes['menu-container']}>
        <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <DotsIcon />
        </IconButton>
        <HeaderMenu
          setIsOpen={setIsMenuOpen}
          className={cc([classes['header-menu'], { [classes.show]: isMenuOpen }])}
        />
      </div>

      <IconButton onClick={onMinimizeClick}>
        <FullscreenIcon />
      </IconButton>
    </section>
  );
}
