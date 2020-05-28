import React, { useState } from 'react';

import classes from './styles.module.scss';

export default function HelpTab({ childNodes }) {
  return (
    <ul className={classes['help-tabs']}>
      {childNodes.map((node) => (
        <li className={classes['help-item']} key={node.id}>
          <span className={classes.title}>{node.title}</span>
          <span className={classes.description}>{node.description}</span>
          {node.properties?.url && <span className={classes.url}>{node.properties?.url}</span>}
        </li>
      ))}
    </ul>
  );
}
