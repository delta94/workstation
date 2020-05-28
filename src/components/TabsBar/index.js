import React, { useState } from 'react';

import mockTabs from './tabs-mock';
import classes from './styles.module.scss';

export default function TabsBar({ onClick }) {
  const [tabs, setTabs] = useState(mockTabs);
  const [activeTab, setActiveTab] = useState(tabs[0]);

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
