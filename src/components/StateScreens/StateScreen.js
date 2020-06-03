import React from 'react';

import classes from './styles.module.scss';

export default function StateScreen({ iconComponent: IconComponent, children }) {
  return (
    <div className={classes['state-screen']}>
      <IconComponent className={classes['icon']} />
      {children}
    </div>
  );
}
