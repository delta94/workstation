import React, { useContext, useState } from 'react';
import cc from 'classcat';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import { ReactComponent as AssistantHome } from './icons/assistant-home.svg';
import { ReactComponent as Bookmarks } from './icons/bookmarks.svg';
import { ReactComponent as OngoingTasks } from './icons/ongoing-tasks.svg';
import classes from './styles.module.scss';

const iconsToTabsDictionary = {
  'assistant-home': AssistantHome,
  bookmarks: Bookmarks,
  'ongoing-tasks': OngoingTasks,
};

export default function TabsBar({ onClick }) {
  const { uiTreeSDK: tabs } = useContext(WalkmeSDKContext);
  const [activeTab, setActiveTab] = useState(undefined);

  console.log('tabs', tabs);

  function onClickTab(tab) {
    setActiveTab(tab);
    onClick({ contentType: tab.properties.tabType, content: tab.childNodes, data: tab });
  }

  return (
    <ul className={classes.tabs}>
      {tabs.map((tab) => {
        const tabIconName = tab.title.toLowerCase().replace(' ', '-');
        const TabIcon = iconsToTabsDictionary[tabIconName];
        return (
          <li
            className={cc([classes.tab, { [classes.active]: tab === activeTab }])}
            key={tab.id}
            title={tab.description}
            onClick={() => onClickTab(tab)}
          >
            <TabIcon />
            {tab.title}
          </li>
        );
      })}
    </ul>
  );
}
