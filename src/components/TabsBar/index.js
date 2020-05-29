import React, { useContext, useState } from 'react';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import classes from './styles.module.scss';

export default function TabsBar({ onClick }) {
  const { uiTreeSDK: tabs } = useContext(WalkmeSDKContext);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  function onClickTab(tab) {
    setActiveTab(tab);
    onClick({ contentType: tab.properties.tabType, content: tab.childNodes, data: tab });
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
