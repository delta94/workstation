import React, { useState } from 'react';

import Header from '../Header';
import TabsLayout from '../TabsBar';
import HelpList from '../HelpList';

import classes from './styles.module.scss';

const contentTypeToComponentDictionary = {
  help: HelpList,
  tasks: () => <div>Tasks</div>,
  microApp: () => <div>Micro App</div>,
};

function Layout() {
  const [activeSection, setActiveSection] = useState();

  return (
    <>
      <Header onClick={setActiveSection} />
      <TabsLayout onClick={setActiveSection} />
      <section className={classes.content} style={{ whiteSpace: 'pre' }}>
        The active thing
        <br />
        {JSON.stringify(activeSection, null, 2)}
      </section>
    </>
  );
}

export default Layout;
