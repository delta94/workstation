import React from 'react';
import { render } from '@testing-library/react';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';
import TabsBar from './index';

import { sdkProvider } from '../../helpers/sdkMockForTests';

describe('TabsBar renders correctly', () => {
  test('should render correctly', async () => {
    const { container } = render(
      <WalkmeSDKContext.Provider value={sdkProvider}>
        <TabsBar path={{ index: 0 }} isActive={false} />
      </WalkmeSDKContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
