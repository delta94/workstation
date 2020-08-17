import React, { useContext, useState, useEffect, useRef } from 'react';
import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';
import { TOGGLE_LOCATION, UPDATE_LOCATION, UPDATE_LOCATION_HISTORY } from '../../providers/reducer';

import Header from '../Header';
import TabsBar from '../TabsBar';
import TabsContent from '../TabsContent';
import SearchResults from '../SearchResults';
import NotificationList from '../NotificationList';
import NoData from '../StateScreens/NoData';

import classes from './styles.module.scss';
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

const toggleLocations = ['notifications', 'action-bot'];

function Layout() {
  const {
    state: {
      sdk: { tabTypes },
      ui: { location },
    },
    dispatch,
  } = useContext(WalkmeSDKContext);
  const [tabsAreActive, setTabsAreActive] = useState(areTabsActive);
  const [wasActionBotLoaded, setActionBotLoaded] = useState(false);
  const ContentComponent = contentTypeToComponentDictionary[location.contentType];
  const contentSection = useRef(null);

  function onSetActiveSection(newActiveSection) {
    const changeSearchTerm = newActiveSection.contentType === 'search' && location.contentType === 'search';
    const newSearchTermIsNotEmpty = newActiveSection.searchTerm !== '';

    // This happens when first starting to search (on the first letter input) before the app is in the search section,
    // or for any other section
    if (!changeSearchTerm && newSearchTermIsNotEmpty) {
      const dispatchAction = toggleLocations.includes(location.contentType) ? UPDATE_LOCATION : UPDATE_LOCATION_HISTORY;
      dispatch({ type: dispatchAction, location: newActiveSection });
    }

    // This happens after the app is already in the search section
    if (changeSearchTerm) {
      if (!newActiveSection.searchTerm) {
        dispatch({ type: TOGGLE_LOCATION });
      } else {
        dispatch({ type: UPDATE_LOCATION, location: newActiveSection });
      }
    }
  }

  function onDeselectActiveSection() {
    dispatch({ type: TOGGLE_LOCATION });
  }

  function areTabsActive() {
    return Object.values(tabTypes).includes(location.contentType);
  }

  useEffect(() => {
    contentSection.current.scrollTo(0, 0);
    setTabsAreActive(areTabsActive());

    if (!wasActionBotLoaded && location.contentType === 'action-bot') {
      setActionBotLoaded(true);
    }
  }, [location]);

  const ActionBot = (wasActionBotLoaded || location.contentType === 'action-bot') && (
    <ActionBotLayout
      className={location.contentType !== 'action-bot' ? 'invisible' : ''}
      location={location}
      onDeselectSection={onDeselectActiveSection}
    />
  );

  return (
    <>
      <Header
        onSelectSection={onSetActiveSection}
        onDeselectSection={onDeselectActiveSection}
        activeSection={location}
      />
      <TabsBar path={location.index} onSelectSection={onSetActiveSection} isActive={tabsAreActive} />
      <section ref={contentSection} className={classes.content}>
        {!!ActionBot && ActionBot}
        {!!ContentComponent && <ContentComponent location={location} onDeselectSection={onDeselectActiveSection} />}
      </section>
    </>
  );
}

export default Layout;
