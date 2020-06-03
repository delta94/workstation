import React from 'react';

import classes from './styles.module.scss';

export default function StateScreen({ iconComponent: IconComponent, children, ...otherProps }) {
  return (
    <div className={classes['state-screen']} {...otherProps}>
      <IconComponent className={classes['icon']} />
      {children}
    </div>
  );
}
