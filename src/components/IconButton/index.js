import React from 'react';
import cc from 'classcat';
import classes from './styles.module.scss';

export default function IconButton({ children, toggleOn = false, className = '', ...otherProps }) {
  return (
    <button className={cc([classes['icon-button'], className, { [classes['toggle-on']]: toggleOn }])} {...otherProps}>
      <div className={classes['growing-circle']} />
      <div className={classes.icon}>{children}</div>
    </button>
  );
}
