import React from 'react';

import StateScreen from './StateScreen';
import { ReactComponent as NoConnectionIcon } from './icons/no-connection.svg';

export default function NoConnection() {
  return (
    <StateScreen iconComponent={NoConnectionIcon}>
      <div>No notifications</div>
    </StateScreen>
  );
}
