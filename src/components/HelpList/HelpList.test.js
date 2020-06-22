import React from 'react';
import { render } from '@testing-library/react';

import { sdkProvider } from '../../helpers/sdkMockForTests';
import HelpList from './index';

describe('HelpList renders correctly', () => {
  test('should render correctly', () => {
    const { container } = render(<HelpList content={sdkProvider.state.sdk.uiTreeSDK[0].childNodes} />);
    expect(container).toMatchSnapshot();
  });
});
