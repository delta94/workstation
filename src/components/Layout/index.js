import React, { useState } from 'react';

import Header from '../Header';
import TabsLayout from '../TabsBar';
import HelpList from '../HelpList';
import TaskList from '../TaskList';

import classes from './styles.module.scss';

const contentTypeToComponentDictionary = {
  help: HelpList,
  tasks: TaskList,
  microApp: () => <div>Micro App</div>,
  undefined: () => <div>NO RENDERER OR CONTENT</div>,
};

function Layout() {
  const [activeSection, setActiveSection] = useState({ contentType: undefined, content: undefined });

  const ContentComponent = contentTypeToComponentDictionary[activeSection.contentType];
  return (
    <>
      <Header onClick={setActiveSection} />
      <TabsLayout onClick={setActiveSection} />
      <section className={classes.content} style={{ whiteSpace: 'pre' }}>
        <ContentComponent content={activeSection.content} />
      </section>
    </>
  );
}

export default Layout;
