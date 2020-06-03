import React, { useContext, useEffect, useState } from 'react';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import TaskItem from '../TaskList/TaskItem';
import HelpItem from '../HelpList/HelpItem';

import { findInSearchApi, findInUiTree } from './helpers';
import SearchResultItem from './SearchResultItem';
import { ReactComponent as BackArrowIcon } from './back-arrow.svg';
import classes from './styles.module.scss';

export default function SearchResults({ searchTerm, resetSearch }) {
  const { uiTreeSDK: uiTree, wmSearch } = useContext(WalkmeSDKContext);
  const [uiTreeResults, setUiTreeResults] = useState(undefined);
  const [apiSearchResults, setApiSearchResults] = useState(undefined);

  useEffect(() => {
    (async function fetchData() {
      setApiSearchResults(await findInSearchApi(searchTerm, wmSearch));
      setUiTreeResults(findInUiTree(searchTerm, uiTree));
    })();
  }, [searchTerm]);

  return (
    <div className={classes['search-results']}>
      <div className={classes.return}>
        <BackArrowIcon />
        Results for "{searchTerm}"
      </div>
      {uiTreeResults?.map((node) => {
        const Component = node.type === 'task' ? TaskItem : HelpItem;
        return <Component node={node} key={node.id} />;
      })}
      {apiSearchResults?.map((node, index) => {
        return <SearchResultItem node={node} key={index} />;
      })}
    </div>
  );
}
