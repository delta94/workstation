import React, { useContext, useState, useRef, useEffect } from 'react';
import cc from 'classcat';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import { ReactComponent as AssistantHome } from './icons/assistant-home.svg';
import { ReactComponent as Bookmarks } from './icons/bookmarks.svg';
import { ReactComponent as OngoingTasks } from './icons/ongoing-tasks.svg';
import classes from './styles.module.scss';

const iconsArray = [AssistantHome, OngoingTasks, Bookmarks];

export default function TabsBar({ onSelectSection, isActive }) {
  const { uiTreeSDK: tabs } = useContext(WalkmeSDKContext);
  const [activeTab, setActiveTab] = useState(undefined);
  const [underlineSizes, setUnderlineSize] = useState(undefined);
  const tabRefs = useRef([new Array(tabs.length)]);

  function updateUnderlineSize(tabIndex) {
    const { width, left } = tabRefs.current[tabIndex].getBoundingClientRect();
    setUnderlineSize({ width, left });
  }

  function clearUnderlineSize() {
    setUnderlineSize({ width: 0, left: 0 });
  }

  function onClickTab(tab, index) {
    setActiveTab(tab);
    updateUnderlineSize(index);
    onSelectSection({ contentType: tab.properties.tabType, content: tab.childNodes, data: tab });
  }

  useEffect(() => {
    if (!isActive) {
      clearUnderlineSize();
    } else {
      const tabIndex = tabs.findIndex(({ id }) => id === activeTab.id);
      updateUnderlineSize(tabIndex);
    }
  }, [isActive]);

  return (
    <section className={classes.tabs}>
      <ul className={classes['tabs-list']}>
        {tabs.map((tab, index) => {
          const TabIcon = iconsArray[index];
          const isTabActive = tab === activeTab;

          return (
            <li
              className={cc([classes.tab, { [classes.active]: isActive && isTabActive }])}
              key={tab.id}
              title={tab.description}
              onClick={() => onClickTab(tab, index)}
              ref={(ref) => {
                tabRefs.current[index] = ref;
              }}
            >
              <TabIcon />
              <span className={classes['tab-title']}>{tab.title}</span>
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
