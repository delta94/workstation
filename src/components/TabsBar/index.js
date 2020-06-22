import React, { useContext, useState, useRef, useEffect, useMemo } from 'react';
import cc from 'classcat';
import isEmpty from 'lodash/isEmpty';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import { ReactComponent as AssistantHome } from './icons/assistant-home.svg';
import { ReactComponent as Bookmarks } from './icons/bookmarks.svg';
import { ReactComponent as OngoingTasks } from './icons/ongoing-tasks.svg';
import classes from './styles.module.scss';

const iconsArray = [AssistantHome, OngoingTasks, Bookmarks];

export default function TabsBar({ path: tabIndex, onSelectSection, isActive }) {
  const {
    state: {
      sdk: {
        uiTreeSDK: tabs,
        platform: { isWindows },
      },
    },
  } = useContext(WalkmeSDKContext);
  const [activeTab, setActiveTab] = useState(undefined);
  const [localTabIndex, setLocalTabIndex] = useState(tabIndex);
  const [underlineSizes, setUnderlineSize] = useState(undefined);
  const tabRefs = useRef([new Array(tabs.length)]);
  const tabsUnderlineOffset = useMemo(() => (!!isWindows ? 10 : 0), [isWindows]);

  function updateUnderlineSize(index = localTabIndex) {
    if (isActive) {
      const { width, left } = tabRefs.current[index].getBoundingClientRect();
      setUnderlineSize({ width, left: left - tabsUnderlineOffset });
    } else {
      setUnderlineSize({ width: 0, left: 0 }); // clear underline
    }
  }

  function updateUnderlineSizeOnResize(localTabIndex) {
    // When the app is opened for the first time it was already rendered in a "closed" window
    // so the underline is mistakenly measured as 2px
    if (isEmpty(tabRefs.current[localTabIndex])) {
      setTimeout(updateUnderlineSize, 100);
      return;
    }

    updateUnderlineSize();
  }

  function onClickTab(tab, index) {
    setActiveTab(tab);
    updateUnderlineSize(index);
    onSelectSection({ contentType: tabs[index].properties.tabType, index });
  }

  useEffect(() => {
    if (tabIndex !== undefined && tabIndex !== null) {
      setLocalTabIndex(tabIndex);
    }
  }, [tabIndex]);

  useEffect(() => {
    updateUnderlineSize(localTabIndex);
  }, [isActive, localTabIndex]);

  // listen to window resize - this helps show the underline when the app loads
  // see updateUnderlineSizeOnResize() for more info
  const boundUpdateUnderlineSizeOnResize = updateUnderlineSizeOnResize.bind(null, localTabIndex);
  useEffect(() => {
    if (isActive) {
      window.addEventListener('resize', boundUpdateUnderlineSizeOnResize);
    } else {
      window.removeEventListener('resize', boundUpdateUnderlineSizeOnResize);
    }

    return () => {
      window.removeEventListener('resize', boundUpdateUnderlineSizeOnResize);
    };
  }, [isActive, boundUpdateUnderlineSizeOnResize]);

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
