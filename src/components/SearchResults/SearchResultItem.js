import React from 'react';

import classes from './styles.module.scss';
import SearchResultIcon from './SearchResultIcon';

export default function SearchResultItem({ node }) {
  function onClick() {
    // ...
  }

  return (
    <li className={classes['search-result-item']} onClick={onClick}>
      <SearchResultIcon type={node.properties.knowledgeBaseType.toLowerCase()} className={classes['icon']} />
      <div>
        <span className={classes.title}>{node.title}</span>
        <span className={classes['knowledge-base-type']}>{node.properties.knowledgeBaseType}</span>
        <div className={classes.description}>{node.description}</div>
        {node.properties?.url && <span className={classes.url}>{node.properties?.url}</span>}
      </div>
    </li>
  );
}
