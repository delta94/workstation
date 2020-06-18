import React, { useContext, useState, useEffect, useRef } from 'react';

import Header from '../Header';
import TabsBar from '../TabsBar';
import TabsContent from '../TabsContent';
import SearchResults from '../SearchResults';
import NotificationList from '../NotificationList';
import NoData from '../StateScreens/NoData';

import classes from './styles.module.scss';
import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

const contentTypeToComponentDictionary = {
  help: TabsContent,
  tasks: TabsContent,
  notifications: NotificationList,
  search: ({ location, onDeselectSection }) => (
    <SearchResults searchTerm={location.searchTerm} onDeselectSection={onDeselectSection} />
  ),
  undefined: () => <NoData />,
};

function Layout() {
  const {
    state: {
      sdk: { tabTypes },
      ui: { location },
    },
    dispatch,
  } = useContext(WalkmeSDKContext);
  const [tabsAreActive, setTabsAreActive] = useState(areTabsActive);
  const ContentComponent = contentTypeToComponentDictionary[location.contentType];
  const contentSection = useRef(null);

  function onSetActiveSection(newActiveSection) {
    const changeSearchTerm = newActiveSection.contentType === 'search' && location.contentType === 'search';
    const newSearchTermIsNotEmpty = newActiveSection.searchTerm !== '';

    // This happens when first starting to search (on the first letter input) before the app is in the search section,
    // or for any other section
    if (!changeSearchTerm && newSearchTermIsNotEmpty) {
      dispatch({ type: 'updateLocationHistory', location: newActiveSection });
    }

    // This happens after the app is already in the search section
    if (changeSearchTerm) {
      if (!newActiveSection.searchTerm) {
        dispatch({ type: 'toggleLocation' });
      } else {
        dispatch({ type: 'updateLocation', location: newActiveSection });
      }
    }
  }

  function onDeselectActiveSection() {
    dispatch({ type: 'toggleLocation' });
  }

  function areTabsActive() {
    return Object.values(tabTypes).includes(location.contentType);
  }

  useEffect(() => {
    contentSection.current.scrollTo(0, 0);
    setTabsAreActive(areTabsActive());
  }, [location]);

  return (
    <>
      <Header
        onSelectSection={onSetActiveSection}
        onDeselectSection={onDeselectActiveSection}
        activeSection={location}
      />
      <TabsBar path={location.index} onSelectSection={onSetActiveSection} isActive={tabsAreActive} />
      <section ref={contentSection} className={classes.content}>
        <ContentComponent location={location} onDeselectSection={onDeselectActiveSection} />
      </section>
    </>
  );
}

export default Layout;
