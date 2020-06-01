import React from 'react';
import cc from 'classcat';
import classes from './styles.module.scss';

export default function IconButton({ children, className = '', ...otherProps }) {
  return (
    <button className={cc([classes['icon-button'], className])} {...otherProps}>
      <div className={classes['growing-circle']} />
      {children}
    </button>
  );
}
