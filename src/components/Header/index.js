import React, { useEffect, useState } from 'react';
import walkme from '@walkme/sdk';
import cc from 'classcat';

import SearchInput from '../SearchInput';
import Logo from '../Logo';

import FullScreenButton from './FullScreenButton';
import HeaderMenuButton from './HeaderMenuButton';
import classes from './styles.module.scss';
import NotificationsButton from './NotificationsButton';
import ActionBotButton from './ActionBotButton';

export default function Header({ onSelectSection, onDeselectSection, activeSection }) {
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [shouldShowActionBot, setShouldShowActionBot] = useState(false);

  useEffect(() => {
    const actionBotUrl = walkme.apps.getPublicPath('actionBot');
    const actionBot = walkme.apps.getConfig('actionBot');
    setShouldShowActionBot(!!(actionBotUrl && actionBot?.id && !isNaN(actionBot.id)));
  }, []);

  function onSearchTermChange(searchTerm) {
    onSelectSection({ contentType: 'search', searchTerm });
  }

  return (
    <section className={cc([classes.header, { [classes['search-focus']]: isSearchFocus }])}>
      <Logo className={classes.logo} />
      <div className={classes['search-input-wrapper']}>
        <SearchInput onFocusChange={setIsSearchFocus} onChange={onSearchTermChange} />
      </div>
      {shouldShowActionBot && (
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
