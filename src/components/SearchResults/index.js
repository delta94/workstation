import React, { useContext, useEffect, useState } from 'react';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import { findInSearchApi, findInUiTree } from './helpers';
import classes from './styles.module.scss';

export default function SearchResults({ searchTerm }) {
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
    <div className={classes['search-results']} style={{ whiteSpace: 'pre' }}>
      <div>{JSON.stringify(uiTreeResults, null, 2)}</div>
      <div>{JSON.stringify(apiSearchResults, null, 2)}</div>
    </div>
  );
}
