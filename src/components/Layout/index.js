import React, { useContext, useState, useEffect, useRef } from 'react';

import Header from '../Header';
import TabsBar from '../TabsBar';
import TabsContent from '../TabsContent';
import SearchResults from '../SearchResults';
import NotificationList from '../NotificationList';
import NoData from '../StateScreens/NoData';

import classes from './styles.module.scss';
import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';
import walkme from '@walkme/sdk';
import cc from 'classcat';

const contentTypeToComponentDictionary = {
  help: TabsContent,
  tasks: TabsContent,
  notifications: NotificationList,
  search: ({ path, onDeselectSection }) => (
    <SearchResults searchTerm={path.searchTerm} onDeselectSection={onDeselectSection} />
  ),
  undefined: () => <NoData />,
};

function Layout() {
  const { uiTreeSDK: tabs, tabTypes } = useContext(WalkmeSDKContext);

  // default starting screen is the first tab
  const [activeSection, setActiveSection] = useState({
    contentType: tabs[0].properties.tabType,
    path: { index: 0 },
  });
  const [previousActiveSection, setPreviousActiveSection] = useState({ contentType: undefined, content: undefined });
  const [tabsAreActive, setTabsAreActive] = useState(areTabsActive);
  const ContentComponent = contentTypeToComponentDictionary[activeSection.contentType];
  const contentSection = useRef(null);
  const isWindows = walkme.platformType === walkme.platform?.PlatformTypes.Windows;

  function onSetActiveSection(newActiveSection) {
    const changeSearchTerm = newActiveSection.contentType === 'search' && activeSection.contentType === 'search';

    if (!changeSearchTerm) {
      setPreviousActiveSection(activeSection);
      setActiveSection(newActiveSection);
    }

    if (changeSearchTerm) {
      if (!newActiveSection.path.searchTerm) {
        setActiveSection(previousActiveSection);
      } else {
        setActiveSection(newActiveSection);
      }
    }
  }

  function onDeselectActiveSection() {
    setActiveSection(previousActiveSection);
  }

  function areTabsActive() {
    return Object.values(tabTypes).includes(activeSection.contentType);
  }

  useEffect(() => {
    contentSection.current.scrollTo(0, 0);
    setTabsAreActive(areTabsActive());
  }, [activeSection]);

  return (
    <div className={cc([{ [classes['platform-windows']]: isWindows }])}>
      <Header
        onSelectSection={onSetActiveSection}
        onDeselectSection={onDeselectActiveSection}
        activeSection={activeSection}
      />
      <TabsBar
        path={activeSection.path}
        onSelectSection={onSetActiveSection}
        isActive={tabsAreActive}
        tabsUnderlineOffset={isWindows ? 10 : 0}
      />
      <section ref={contentSection} className={classes.content}>
        <ContentComponent path={activeSection.path} onDeselectSection={onDeselectActiveSection} />
      </section>
    </div>
  );
}

export default Layout;
