import React, { useState } from 'react';
import cc from 'classcat';

import classes from './styles.module.scss';

export default function SearchInput({ onFocusChange }) {
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  function onChangeSearchFocus(state) {
    setIsSearchFocus(state);
    onFocusChange(state);
  }

  return (
    <div className={cc([classes.search, { [classes.focus]: isSearchFocus }])}>
      <input
        type="search"
        placeholder="Search"
        onFocus={() => onChangeSearchFocus(true)}
        onBlur={() => onChangeSearchFocus(false)}
      />
    </div>
  );
}
