import React, { useState } from 'react';
import cc from 'classcat';
import SmoothCollapse from 'react-smooth-collapse';

import HelpItem from './HelpItem';

import FolderIcon from './FolderIcon';
import classes from './styles.module.scss';

export default function HelpList({ node, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <li className={cc([classes['help-group'], className])}>
      <div className={classes['help-group-title']} onClick={toggleDropDown}>
        <FolderIcon isActive={isOpen} className={classes['help-list-icon']} />
        <span>{node.title}</span>
      </div>
      <SmoothCollapse expanded={isOpen}>
        <ul>
          {node.childNodes?.map((childNode) => (
            <HelpItem key={childNode.id} node={childNode} />
          ))}
        </ul>
      </SmoothCollapse>
    </li>
  );
}
