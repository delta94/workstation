import React from 'react';

import LoaderIcon from '../LoaderIcon';
import StateScreen from './StateScreen';

export default function Loader() {
  return (
    <StateScreen iconComponent={LoaderIcon}>
      <div>Loading</div>
    </StateScreen>
  );
}
