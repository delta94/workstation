import React, { useState, useMemo } from 'react';
import walkme from '@walkme/sdk';
import cc from 'classcat';

import { ReactComponent as LanguagesIcon } from './icons/languages.svg';
import { ReactComponent as LogOutIcon } from './icons/log-out.svg';
import { ReactComponent as ReloadIcon } from './icons/reload.svg';
import { ReactComponent as CollapseArrowIcon } from './icons/collapseArrow.svg';

import classes from './styles.module.scss';
import SmoothCollapse from 'react-smooth-collapse';

export default function HeaderMenu({ className = '' }) {
  const [isOpen, setIsOpen] = useState(true);
  const languages = useMemo(() => walkme.language.languages);
  const showLogout = useMemo(() => walkme.settings.getEndUserSettings().method === walkme.settings.EndUserMethods.IDP);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  async function selectLanguage(language) {
    await walkme.language.changeLanguage(language);
  }

  async function refresh() {
    await walkme.platform.refreshContent();
  }

  function logout() {
    walkme.platform.logout();
  }

  return (
    <ul className={cc([classes['header-menu'], className])}>
      <li>
        <div className={cc([classes.title, classes['collapse-title']])} onClick={toggleDropDown}>
          <LanguagesIcon />
          Languages
          <CollapseArrowIcon className={cc([classes['collapse-icon'], { [classes['is-open']]: isOpen }])} />
        </div>
        <SmoothCollapse expanded={isOpen}>
          <ul className={classes['inner-menu']}>
            {languages.map((language) => (
              <li
                className={classes.title}
                key={language.shortName ?? 'default'}
                onClick={() => selectLanguage(language.shortName)}
              >
                {language.displayName}
              </li>
            ))}
          </ul>
        </SmoothCollapse>
      </li>
      <hr />
      <li className={classes.title} onClick={refresh}>
        <ReloadIcon />
        Refresh
      </li>
      {showLogout && (
        <li className={classes.title} onClick={logout}>
          <LogOutIcon />
          Logout
        </li>
      )}
    </ul>
  );
}
