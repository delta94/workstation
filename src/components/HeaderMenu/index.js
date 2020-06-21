import React, { useState, useMemo } from 'react';
import walkme from '@walkme/sdk';
import cc from 'classcat';
import SmoothCollapse from 'react-smooth-collapse';

import { ReactComponent as LanguagesIcon } from './icons/languages.svg';
import { ReactComponent as LogOutIcon } from './icons/log-out.svg';
import { ReactComponent as ReloadIcon } from './icons/reload.svg';
import { ReactComponent as CollapseArrowIcon } from './icons/collapseArrow.svg';

import classes from './styles.module.scss';

export default function HeaderMenu({ className = '' }) {
  const [isLanguagesExpanded, setIsLanguagesExpanded] = useState(true);
  const languages = useMemo(() => walkme.language.languages);
  const showLogout = useMemo(() => walkme.settings.getEndUserSettings().method === walkme.settings.EndUserMethods.IDP);

  function toggleDropDown() {
    setIsLanguagesExpanded(!isLanguagesExpanded);
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
      {languages.length > 1 && (
        <>
          <li>
            <div className={cc([classes.title, classes['collapse-title']])} onClick={toggleDropDown}>
              <LanguagesIcon />
              Languages
              <CollapseArrowIcon
                className={cc([classes['collapse-icon'], { [classes['is-open']]: isLanguagesExpanded }])}
              />
            </div>
            <SmoothCollapse expanded={isLanguagesExpanded}>
              <ul className={classes['inner-menu']}>
                {languages.map((language) => (
                  <li
                    className={classes.title}
                    key={language.shortName ?? language.ShortName ?? 'default'}
                    onClick={() => selectLanguage(language.shortName ?? language.ShortName)}
                  >
                    {language.displayName ?? language.DisplayName}
                  </li>
                ))}
              </ul>
            </SmoothCollapse>
          </li>
          <hr />
        </>
      )}
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
