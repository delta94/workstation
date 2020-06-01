import React, { useContext, useState, useRef, useEffect } from 'react';
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

export default function TabsBar({ onSelectSection, isActive }) {
  const { uiTreeSDK: tabs } = useContext(WalkmeSDKContext);
  const [activeTab, setActiveTab] = useState(undefined);
  const [underlineSizes, setUnderlineSize] = useState(undefined);
  const tabRefs = useRef([new Array(tabs.length)]);

  function onClickTab(tab, index) {
    setActiveTab(tab);
    onSelectSection({ contentType: tab.properties.tabType, content: tab.childNodes, data: tab });

    const { width, left } = tabRefs.current[index].getBoundingClientRect();
    setUnderlineSize({ width, left });
  }

  useEffect(() => {
    if (!isActive) {
      setUnderlineSize({ width: 0, left: 0 });
    }
  }, [isActive]);

  return (
    <section className={classes.tabs}>
      <ul className={classes['tabs-list']}>
        {tabs.map((tab, index) => {
          const tabIconName = tab.title.toLowerCase().replace(' ', '-');
          const TabIcon = iconsToTabsDictionary[tabIconName];
          const isActive = tab === activeTab;

          return (
            <li
              className={cc([classes.tab, { [classes.active]: isActive }])}
              key={tab.id}
              title={tab.description}
              onClick={() => onClickTab(tab, index)}
              ref={(ref) => {
                tabRefs.current[index] = ref;
              }}
            >
              <TabIcon />
              {tab.title}
            </li>
          );
        })}
      </ul>
      <div
        className={classes['tabs-underline']}
        style={{
          '--underline-width': `${underlineSizes?.width ?? 0}px`,
          '--underline-left': `${underlineSizes?.left ?? 0}px`,
        }}
      />
    </section>
  );
}
