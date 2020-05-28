import React, { useState } from 'react';
import cc from 'classcat';

import dots from '../../images/dots.svg';
import IconButton from '../IconButton';
import NotificationsIcon from '../icon-components/NotificationsIcon';
import FullscreenIcon from '../icon-components/FullscreenIcon';
import classes from './styles.module.scss';
import SearchInput from '../SearchInput';
import Logo from '../Logo';

export default function Header() {
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  return (
    <div className={cc([classes.header, { [classes['search-focus']]: isSearchFocus }])}>
      <Logo />
      <div style={{ marginLeft: 36 }}>
        <SearchInput onFocusChange={setIsSearchFocus} />
      </div>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <IconButton>
        <img src={dots} width={24} height={16} />
      </IconButton>
      <IconButton>
        <FullscreenIcon />
      </IconButton>
    </div>
  );
}
