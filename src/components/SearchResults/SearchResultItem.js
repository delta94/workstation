import React from 'react';
import walkme from '@walkme/sdk';

import classes from './styles.module.scss';
import SearchResultIcon from './SearchResultIcon';

export default function SearchResultItem({ node }) {
  function onClick() {
    const url = node.properties.url;
    walkme.platform.openUrl(url);
  }

  return (
    <li className={classes['search-result-item']} onClick={onClick}>
      <SearchResultIcon type={node.properties.knowledgeBaseType.toLowerCase()} className={classes['icon']} />
      <div>
        <span className={classes.title}>{node.title}</span>
        <span className={classes['knowledge-base-type']}>{node.properties.knowledgeBaseType}</span>
        <div className={classes.description}>{node.description}</div>
        <span className={classes.url}>{node.properties.url}</span>
      </div>
    </li>
  );
}
