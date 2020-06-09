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
      <div className={classes['icon']}>
        <SearchResultIcon type={node.properties.knowledgeBaseType.toLowerCase()} />
      </div>
      <div className={classes['search-result-text']}>
        <div className={classes.title}>{`${node.title}　`}</div>
        <div className={classes['knowledge-base-type']}>{node.properties.knowledgeBaseType}</div>
        <div className={classes.description}>{node.description}</div>
        <div className={classes.url}>{node.properties.url}</div>
      </div>
    </li>
  );
}
