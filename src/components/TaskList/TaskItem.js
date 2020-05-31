import React from 'react';
import cc from 'classcat';

import classes from './styles.module.scss';

export default function TaskItem({ node }) {
  return (
    <li
      className={cc([
        classes['task-item'],
        {
          [classes['is-completed']]: node.properties.isCompleted,
          [classes['is-crossed-off']]: node.properties.isCrossedOff,
          [classes['is-disabled']]: node.properties.isDisabled,
        },
      ])}
    >
      <span className={classes.title}>{node.title}</span>
    </li>
  );
}
