import React, { useState } from 'react';
import walkme from '@walkme/sdk';
import cc from 'classcat';

import IconButton from '../IconButton';
import NotificationsIcon from '../icon-components/NotificationsIcon';
import DotsIcon from '../icon-components/DotsIcon';
import FullscreenIcon from '../icon-components/FullscreenIcon';
import classes from './styles.module.scss';
import SearchInput from '../SearchInput';
import Logo from '../Logo';
import HeaderMenu from '../HeaderMenu';

export default function Header() {
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onMinimizeClick() {
    walkme.platform.closeMe();
  }

  return (
    <section className={cc([classes.header, { [classes['search-focus']]: isSearchFocus }])}>
      <Logo className={classes.logo} />
      <div className={classes['search-input-wrapper']}>
        <SearchInput onFocusChange={setIsSearchFocus} />
      </div>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <div className={classes['menu-container']}>
        <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <DotsIcon />
        </IconButton>
        <HeaderMenu isOpen={isMenuOpen} className={cc([classes['header-menu'], { [classes.show]: isMenuOpen }])} />
      </div>

      <IconButton onClick={onMinimizeClick}>
        <FullscreenIcon />
      </IconButton>
    </section>
  );
}
