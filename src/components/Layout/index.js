import React, { useContext, useState, useEffect, useRef } from 'react';

import Header from '../Header';
import TabsBar from '../TabsBar';
import HelpList from '../HelpList';
import TaskList from '../TaskList';
import NotificationList from '../NotificationList';

import classes from './styles.module.scss';
import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

const contentTypeToComponentDictionary = {
  help: HelpList,
  tasks: TaskList,
  notifications: NotificationList,
  microApp: () => <div>Micro App</div>,
  undefined: () => <div>NO RENDERER OR CONTENT</div>,
};

function Layout() {
  const { tabTypes } = useContext(WalkmeSDKContext);
  const [activeSection, setActiveSection] = useState({ contentType: undefined, content: undefined });
  const tabsAreActive = Object.values(tabTypes).includes(activeSection.contentType);
  const ContentComponent = contentTypeToComponentDictionary[activeSection.contentType];
  const contentSection = useRef(null);

  useEffect(() => {
    contentSection.current.scrollTo(0, 0);
  }, [activeSection]);

  return (
    <>
      <Header onSelectSection={setActiveSection} />
      <TabsBar onSelectSection={setActiveSection} isActive={tabsAreActive} />
      <section ref={contentSection} className={classes.content} style={{ whiteSpace: 'pre' }}>
        <ContentComponent content={activeSection.content} />
      </section>
    </>
  );
}

export default Layout;
