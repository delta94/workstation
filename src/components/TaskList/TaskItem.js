import React from 'react';
import cc from 'classcat';

import classes from './styles.module.scss';

export default function TaskItem({ task }) {
  return (
    <li
      className={cc([
        classes['task-item'],
        {
          [classes['is-completed']]: task.properties.isCompleted,
          [classes['is-crossed-off']]: task.properties.isCrossedOff,
          [classes['is-disabled']]: task.properties.isDisabled,
        },
      ])}
    >
      <span className={classes.title}>{task.title}</span>
    </li>
  );
}
