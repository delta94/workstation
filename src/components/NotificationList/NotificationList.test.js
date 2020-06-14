import React from 'react';
import { render } from '@testing-library/react';

import { sdkProvider } from '../../helpers/sdkMockForTests';
import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import NotificationList from './index';

describe('NotificationList renders correctly', () => {
  test.skip('should render correctly', async () => {
    const { container } = render(
      <WalkmeSDKContext.Provider value={sdkProvider}>
        <NotificationList />
      </WalkmeSDKContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
