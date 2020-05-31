import React from 'react';

import HelpIcon from './HelpIcon';

import classes from './styles.module.scss';

export default function HelpItem({ node }) {
  return (
    <li className={classes['help-item']} key={node.id}>
      <HelpIcon type={node.type} className={classes['help-list-icon']} />
      <div>
        <span className={classes.title}>{node.title}</span>
        <span className={classes.description}>{node.description}</span>
        {node.properties?.url && <span className={classes.url}>{node.properties?.url}</span>}
      </div>
    </li>
  );
}
