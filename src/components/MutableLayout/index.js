import React, { useContext } from 'react';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';
import TabsContent from '../TabsContent';
import SearchResults from '../SearchResults';
import NotificationList from '../NotificationList';
import NoData from '../StateScreens/NoData';

const contentTypeToComponentDictionary = {
  help: TabsContent,
  tasks: TabsContent,
  notifications: NotificationList,
  search: ({ location, onDeselectSection }) => (
    <SearchResults searchTerm={location.searchTerm} onDeselectSection={onDeselectSection} />
  ),
  undefined: () => <NoData />,
};

function MutableLayout({ onDeselectActiveSection }) {
  const {
    state: {
      ui: { location },
    },
  } = useContext(WalkmeSDKContext);
  const MutableComponent = contentTypeToComponentDictionary[location.contentType];

  return (
    <>{!!MutableComponent && <MutableComponent location={location} onDeselectSection={onDeselectActiveSection} />}</>
  );
}

export default MutableLayout;
