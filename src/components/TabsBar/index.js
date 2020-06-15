import React, { useContext, useState, useRef, useEffect } from 'react';
import cc from 'classcat';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import { ReactComponent as AssistantHome } from './icons/assistant-home.svg';
import { ReactComponent as Bookmarks } from './icons/bookmarks.svg';
import { ReactComponent as OngoingTasks } from './icons/ongoing-tasks.svg';
import classes from './styles.module.scss';

const iconsArray = [AssistantHome, OngoingTasks, Bookmarks];

export default function TabsBar({ path: { index: tabIndex } = {}, onSelectSection, isActive }) {
  const {
    uiTreeSDK: tabs,
    platform: { isWindows },
  } = useContext(WalkmeSDKContext);
  const [activeTab, setActiveTab] = useState(undefined);
  const [underlineSizes, setUnderlineSize] = useState(undefined);
  const tabRefs = useRef([new Array(tabs.length)]);
  const tabsUnderlineOffset = !!isWindows ? 10 : 0;

  function clearUnderlineSize() {
    setUnderlineSize({ width: 0, left: 0 });
  }

  function updateUnderlineSize(tabIndex) {
    if (tabIndex === undefined || tabIndex === null) {
      clearUnderlineSize();
    } else {
      const { width, left } = tabRefs.current[tabIndex].getBoundingClientRect();
      setUnderlineSize({ width, left: left - tabsUnderlineOffset });
    }
  }

  function onClickTab(tab, index) {
    setActiveTab(tab);
    updateUnderlineSize(index);
    onSelectSection({ path: { index }, contentType: tabs[index].properties.tabType });
  }

  useEffect(() => {
    if (!isActive) {
      clearUnderlineSize();
    } else {
      updateUnderlineSize(tabIndex);
    }
  }, [isActive]);

  useEffect(() => {
    updateUnderlineSize(tabIndex);
  }, [tabIndex]);

  return (
    <section className={classes.tabs} data-testid="tabs-bar">
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
