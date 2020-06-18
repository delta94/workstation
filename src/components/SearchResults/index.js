import React, { useContext, useEffect, useState } from 'react';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import TaskItem from '../TaskList/TaskItem';
import HelpItem from '../HelpList/HelpItem';
import EmptySearch from '../StateScreens/EmptySearch';
import Loader from '../StateScreens/Loader';

import { findInSearchApi, findInUiTree } from './helpers';
import SearchResultItem from './SearchResultItem';
import { ReactComponent as BackArrowIcon } from './back-arrow.svg';
import classes from './styles.module.scss';

export default function SearchResults({ searchTerm, onDeselectSection }) {
  const {
    state: {
      sdk: { uiTreeSDK: uiTree, wmSearch },
    },
  } = useContext(WalkmeSDKContext);
  const [uiTreeResults, setUiTreeResults] = useState(undefined);
  const [apiSearchResults, setApiSearchResults] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    (async function fetchData() {
      setApiSearchResults(await findInSearchApi(searchTerm, wmSearch));
      setUiTreeResults(findInUiTree(searchTerm, uiTree));
      setIsLoading(false);
    })();
  }, [searchTerm]);

  const noSearchResults = !uiTreeResults?.length && !apiSearchResults?.length && !isLoading;
  return (
    <>
      {isLoading && <Loader />}
      {noSearchResults ? (
        <EmptySearch />
      ) : (
        <div className={classes['search-results']} data-testid="search-results">
          <button className={classes.return} onClick={onDeselectSection}>
            <BackArrowIcon />
            Results for "{searchTerm}"
          </button>
          <ul className={classes['search-results-list']}>
            {uiTreeResults?.map((node) => {
              const Component = node.type === 'task' ? TaskItem : HelpItem;
              return <Component node={node} key={`${node.type}-${node.id}`} />;
            })}
            {apiSearchResults?.map((node, index) => {
              return <SearchResultItem node={node} key={index} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
}
