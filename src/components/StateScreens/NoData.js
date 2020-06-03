import React from 'react';

import StateScreen from './StateScreen';
import { ReactComponent as NoDataIcon } from './icons/no-data.svg';

export default function NoData() {
  return (
    <StateScreen iconComponent={NoDataIcon}>
      <div>No data</div>
    </StateScreen>
  );
}
