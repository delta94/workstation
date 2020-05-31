import React, { useState } from 'react';
import cc from 'classcat';
import SmoothCollapse from 'react-smooth-collapse';

import TaskItem from './TaskItem';

import { ReactComponent as TaskGroupArrow } from './taskGroupArrow.svg';
import classes from './styles.module.scss';

export default function TaskGroup({ node, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <li className={cc([classes['task-group'], className])}>
      <div className={classes['task-group-title']} onClick={toggleDropDown}>
        <TaskGroupArrow className={cc([classes['task-group-icon'], { [classes['is-open']]: isOpen }])} />
        {node.title}
      </div>
      <SmoothCollapse expanded={isOpen}>
        <ul>
          {node.childNodes?.map((childNode) => (
            <TaskItem key={childNode.id} node={childNode} />
          ))}
        </ul>
      </SmoothCollapse>
    </li>
  );
}
