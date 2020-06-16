import React from 'react';
import { render } from '@testing-library/react';
import cloneDeep from 'lodash/cloneDeep';

import { sdkProvider } from '../../helpers/sdkMockForTests';
import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import NotificationList from './index';

const { utcToZonedTime } = require('date-fns-tz');

describe('NotificationList renders correctly', () => {
  test('should render correctly', async () => {
    const originalTimeZone = 'Asia/Jerusalem';
    const draftSdkProvider = cloneDeep(sdkProvider);

    draftSdkProvider.notifications.forEach((notification) => {
      const date = new Date(notification.properties.date);
      const zonedDate = utcToZonedTime(date, originalTimeZone);
      notification.properties.date = zonedDate;
    });

    const { container } = render(
      <WalkmeSDKContext.Provider value={draftSdkProvider}>
        <NotificationList />
      </WalkmeSDKContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
