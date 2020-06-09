import React from 'react';

import classes from './styles.module.scss';

export default function StateScreen({ iconComponent: IconComponent, children, ...otherProps }) {
  return (
    <div className={classes['state-screen']} {...otherProps}>
      <div className={classes['state-screen-content']}>
        <IconComponent className={classes['icon']} />
        {children}
      </div>
    </div>
  );
}
