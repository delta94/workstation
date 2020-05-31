import React from 'react';
import walkme from '@walkme/sdk';

import HelpIcon from './HelpIcon';

import classes from './styles.module.scss';

export default function HelpItem({ node }) {
  function onClick() {
    walkme.content.playById(node.type, node.id);
    walkme.platform.closeMe();
  }

  return (
    <li className={classes['help-item']} key={node.id} onClick={onClick}>
      <HelpIcon type={node.type} className={classes['help-list-icon']} />
      <div>
        <span className={classes.title}>{node.title}</span>
        <span className={classes.description}>{node.description}</span>
        {node.properties?.url && <span className={classes.url}>{node.properties?.url}</span>}
      </div>
    </li>
  );
}
