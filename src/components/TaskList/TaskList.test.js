import React from 'react';
import { render } from '@testing-library/react';

import { sdkProvider } from '../../helpers/sdkMockForTests';
import TaskList from './index';

describe('TaskList renders correctly', () => {
  test('renders correctly', () => {
    const { container } = render(<TaskList content={sdkProvider.uiTreeSDK[1].childNodes} />);
    expect(container).toMatchSnapshot();
  });
});
