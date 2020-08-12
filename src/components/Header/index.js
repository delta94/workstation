import React, { useState } from 'react';
import cc from 'classcat';

import SearchInput from '../SearchInput';
import Logo from '../Logo';

import FullScreenButton from './FullScreenButton';
import HeaderMenuButton from './HeaderMenuButton';
import classes from './styles.module.scss';
import NotificationsButton from './NotificationsButton';
import ActionBotButton from './ActionBotButton';
import walkme from '@walkme/sdk';

export default function Header({ onSelectSection, onDeselectSection, activeSection }) {
  const actionBotUrl = walkme.settings.settings?.Components?.actionBot;
  console.log('actionBotUrl', actionBotUrl);
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  function onSearchTermChange(searchTerm) {
    onSelectSection({ contentType: 'search', searchTerm });
  }

  return (
    <section className={cc([classes.header, { [classes['search-focus']]: isSearchFocus }])}>
      <Logo className={classes.logo} />
      <div className={classes['search-input-wrapper']}>
        <SearchInput onFocusChange={setIsSearchFocus} onChange={onSearchTermChange} />
      </div>
      {actionBotUrl && (
        <ActionBotButton
          onSelectSection={onSelectSection}
          onDeselectSection={onDeselectSection}
          activeSection={activeSection}
        />
      )}
      <NotificationsButton
        onSelectSection={onSelectSection}
        onDeselectSection={onDeselectSection}
        activeSection={activeSection}
      />
      <HeaderMenuButton />
      <FullScreenButton />
    </section>
  );
}
