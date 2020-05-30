import React from 'react';

import TaskItem from './TaskItem';

import classes from './styles.module.scss';

export default function TaskList({ content }) {
  console.log('TASKS', content);

  return (
    <ul className={classes['task-list']}>
      {content.map((node) => (
        <TaskItem key={node.id} task={node} />
      ))}
    </ul>
  );
}
