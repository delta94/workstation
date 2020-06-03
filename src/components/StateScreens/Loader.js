import React from 'react';

import LoaderIcon from '../LoaderIcon';
import StateScreen from './StateScreen';

export default function Loader({ ...otherProps }) {
  return (
    <StateScreen iconComponent={LoaderIcon} {...otherProps}>
      <div>Loading</div>
    </StateScreen>
  );
}
