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
      <div className={classes['help-list-icon']}>
        <HelpIcon type={node.type} />
      </div>
      <div className={classes['help-item-text']}>
        <div className={classes.title}>{node.title}</div>
        <div className={classes.description}>{node.description}</div>
        {node.properties?.url && <div className={classes.url}>{node.properties?.url}</div>}
      </div>
    </li>
  );
}
