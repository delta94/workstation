import React, { useState } from 'react';
import cc from 'classcat';

import { ReactComponent as SearchIcon } from './search.svg';
import classes from './styles.module.scss';

export default function SearchInput({ onFocusChange, onChange }) {
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  function onChangeSearchFocus(state) {
    setIsSearchFocus(state);
    onFocusChange(state);
  }

  function onValueChange(e) {
    const value = e.target.value;

    onChange(value);
  }

  return (
    <div className={cc([classes.search, { [classes.focus]: isSearchFocus }])}>
      <input
        type="text"
        placeholder="Search"
        onFocus={() => onChangeSearchFocus(true)}
        onBlur={() => onChangeSearchFocus(false)}
        onChange={onValueChange}
      />
      <SearchIcon className={classes['search-icon']} />
    </div>
  );
}
