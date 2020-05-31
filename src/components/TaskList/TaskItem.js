import React from 'react';
import cc from 'classcat';
import walkme from '@walkme/sdk';

import classes from './styles.module.scss';

export default function TaskItem({ node }) {
  function onClick() {
    walkme.content.playById(walkme.content.TypeNames.Task, node.id);
    walkme.platform.closeMe();
  }

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
      onClick={onClick}
    >
      <span className={classes.title}>{node.title}</span>
    </li>
  );
}
