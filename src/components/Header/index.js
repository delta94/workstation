import React, { useState } from 'react';
import cc from 'classcat';

import dots from '../../images/dots.svg';
import IconButton from '../IconButton';
import NotificationsIcon from '../icon-components/NotificationsIcon';
import DotsIcon from '../icon-components/DotsIcon';
import FullscreenIcon from '../icon-components/FullscreenIcon';
import classes from './styles.module.scss';
import SearchInput from '../SearchInput';
import Logo from '../Logo';

export default function Header() {
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  return (
    <section className={cc([classes.header, { [classes['search-focus']]: isSearchFocus }])}>
      <Logo className={classes.logo} />
      <div className={classes['search-input-wrapper']}>
        <SearchInput onFocusChange={setIsSearchFocus} />
      </div>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <IconButton>
        <DotsIcon />
      </IconButton>
      <IconButton>
        <FullscreenIcon />
      </IconButton>
    </section>
  );
}
