import React, { useState } from 'react';
import walkme from '@walkme/sdk';
import cc from 'classcat';

import { ReactComponent as LanguagesIcon } from './languages.svg';
import { ReactComponent as LogOutIcon } from './log-out.svg';
import { ReactComponent as ReloadIcon } from './reload.svg';
import { ReactComponent as CollapseArrowIcon } from './collapseArrow.svg';

import classes from './styles.module.scss';
import SmoothCollapse from 'react-smooth-collapse';

export default function HeaderMenu({ className = '' }) {
  const isLoggedIn = true;

  const [isOpen, setIsOpen] = useState(true);

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
            <li className={classes.title} onClick={() => selectLanguage('')}>
              Default
            </li>
            <li className={classes.title} onClick={() => selectLanguage('es-es')}>
              Spanish
            </li>
          </ul>
        </SmoothCollapse>
      </li>
      <hr />
      <li className={classes.title} onClick={refresh}>
        <ReloadIcon />
        Refresh
      </li>
      {isLoggedIn && (
        <li className={classes.title} onClick={logout}>
          <LogOutIcon />
          Logout
        </li>
      )}
    </ul>
  );
}
