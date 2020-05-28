import React from 'react';

import classes from './styles.module.scss';

export default function IconButton({ children }) {
  return <div className={classes['icon-button']}>{children}</div>;
}
