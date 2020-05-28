import React, { useState } from 'react';

import mockTabs from './tabs-mock';
import HelpTab from './HelpTab';
import classes from './styles.module.scss';

const tabTypeToComponentDictionary = {
  help: HelpTab,
  tasks: () => <div>Tasks</div>,
  microApp: () => <div>Micro App</div>,
};

export default function TabsLayout({ onClick }) {
  const [tabs, setTabs] = useState(mockTabs);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const TabContent = tabTypeToComponentDictionary[activeTab.properties.tabType];

  function onClickTab(tab) {
    setActiveTab(tab);
    onClick(tab);
  }

  return (
    <ul className={classes.tabs}>
      {tabs.map((tab) => (
        <li className={classes.tab} key={tab.id} title={tab.description} onClick={() => onClickTab(tab)}>
          {tab.title}
        </li>
      ))}
    </ul>
  );
}
