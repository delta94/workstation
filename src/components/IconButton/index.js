import React from 'react';
import cc from 'classcat';
import classes from './styles.module.scss';

export default function IconButton({ children, className = '' }) {
  return <div className={cc([classes['icon-button'], className])}>{children}</div>;
}
