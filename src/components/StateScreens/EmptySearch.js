import React from 'react';

import StateScreen from './StateScreen';
import { ReactComponent as EmptySearchIcon } from './icons/no-results.svg';
import classes from './styles.module.scss';

export default function EmptySearch() {
  return (
    <StateScreen iconComponent={EmptySearchIcon}>
      <div>No results</div>
      <div className={classes['state-screen-sub-text']}>
        Sorry, there are no results for this search. Please try another phrase
      </div>
    </StateScreen>
  );
}
