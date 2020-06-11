import React from 'react';
import { render, act, waitForElement, waitForElementToBeRemoved } from '@testing-library/react';

import { sdkProvider } from '../../helpers/sdkMockForTests';
import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import SearchResults from './index';

jest.mock('@walkme/sdk', () => ({
  content: {
    TypeNames: {
      Video: 'video',
      Article: 'article',
      Launcher: 'launcher',
      ShoutOut: 'shoutOut',
      Shuttle: 'shuttle',
      SmartWalkThru: 'smart-walkthru',
      Survey: 'survey',
      Task: 'task',
      Course: 'course',
      Lesson: 'lesson',
      Walkthru: 'walkthru',
      Category: 'category',
      Tab: 'tab',
      Experiments: 'experiments',
      SearchProviderUrl: 'search-provider-url',
      Tag: 'tag',
      TrackedElement: 'trackedElement',
      TrackedPage: 'trackedPage',
      SupportItem: 'support',
      SearchResult: 'search-result',
      HelpDesk: 'helpDesk',
      SmartTipSet: 'smartTipSet',
    },
  },
}));

describe('SearchResults renders correctly', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('renders correctly', async () => {
    await act(async () => {
      const searchTerm = 'content';

      const { container, getByText, getByTestId } = render(
        <WalkmeSDKContext.Provider value={sdkProvider}>
          <SearchResults searchTerm={searchTerm} />
        </WalkmeSDKContext.Provider>
      );

      await waitForElementToBeRemoved(() => getByText('Loading'));
      await waitForElement(() => getByTestId('search-results'));
      expect(container).toMatchSnapshot();
    });
  });
});
