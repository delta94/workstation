import React, { useContext, useState, useEffect } from 'react';
import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';
import TabsContent from '../TabsContent';
import SearchResults from '../SearchResults';
import NotificationList from '../NotificationList';
import NoData from '../StateScreens/NoData';

import ActionBotLayout from '../ActionBotLayout';

const contentTypeToComponentDictionary = {
  help: TabsContent,
  tasks: TabsContent,
  notifications: NotificationList,
  search: ({ location, onDeselectSection }) => (
    <SearchResults searchTerm={location.searchTerm} onDeselectSection={onDeselectSection} />
  ),
  undefined: () => <NoData />,
};

const contentTypeToImmutableComponentDictionary = {
  ['action-bot']: ActionBotLayout,
};

function MainLayout({ onDeselectActiveSection }) {
  const {
    state: {
      ui: { location },
    },
  } = useContext(WalkmeSDKContext);
  const [loadedComponents, setLoadedComponents] = useState(new Set());

  useEffect(() => {
    if (!!contentTypeToImmutableComponentDictionary[location.contentType]) {
      setLoadedComponents(loadedComponents.add(location.contentType));
    }
  }, [location]);

  const ContentComponent = contentTypeToComponentDictionary[location.contentType];
  const ImmutableComponents = [...loadedComponents].map((componentName, index) => {
    const CurrentComponent = contentTypeToImmutableComponentDictionary[componentName];
    return (
      <CurrentComponent
        key={index}
        location={location}
        onDeselectSection={onDeselectActiveSection}
        className={location.contentType !== componentName ? 'invisible' : ''}
      />
    );
  });

  return (
    <>
      {ImmutableComponents}
      {!!ContentComponent && <ContentComponent location={location} onDeselectSection={onDeselectActiveSection} />}
    </>
  );
}

export default MainLayout;
