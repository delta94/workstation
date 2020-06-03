import React from 'react';
import cc from 'classcat';

import classes from './styles.module.scss';

export default function Logo({ className }) {
  return <div className={cc([classes.logo, className])} />;
}
