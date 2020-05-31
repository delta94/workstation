import React from 'react';
import cc from 'classcat';

import TaskGroup from './TaskGroup';
import TaskItem from './TaskItem';

import classes from './styles.module.scss';

export default function TaskList({ content }) {
  return (
    <ul className={classes['task-list']}>
      {content.map((node, index) => {
        if (node.type === 'category') {
          const isLastOfType = Boolean(index === content.length - 1 || content[index + 1].type !== 'category');
          return <TaskGroup key={node.id} node={node} className={cc([{ [classes['last-of-type']]: isLastOfType }])} />;
        }

        return <TaskItem key={node.id} node={node} />;
      })}
    </ul>
  );
}
