import React from 'react';
import cc from 'classcat';
import walkme from '@walkme/sdk';

import { ReactComponent as TaskCheckbox } from './icons/taskCheckbox.svg';
import { ReactComponent as TaskDone } from './icons/taskDone.svg';

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
          [classes['is-crossed-off']]: node.properties.isCrossedOff,
          [classes['is-disabled']]: node.properties.isDisabled,
        },
      ])}
      {...(!node.properties.isDisabled && { onClick })}
    >
      {node.properties.isCompleted ? <TaskDone className={classes.icon} /> : <TaskCheckbox className={classes.icon} />}
      <span className={classes.title}>{node.title}</span>
    </li>
  );
}
