import React from 'react';

import StateScreen from './StateScreen';
import { ReactComponent as NoConnectionIcon } from './icons/no-connection.svg';
import classes from './styles.module.scss';

export default function NoConnection({ ...otherProps }) {
  return (
    <StateScreen iconComponent={NoConnectionIcon} {...otherProps}>
      <div>WalkMe can’t load due to internet connection</div>
      <div className={classes['state-screen-sub-text']}>
        Check your connection and try again or contact your IT department
      </div>
    </StateScreen>
  );
}
