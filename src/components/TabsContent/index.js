import React, { useContext, useState, useEffect } from 'react';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import HelpList from '../HelpList';
import TaskList from '../TaskList';

const contentTypeToComponentDictionary = {
  help: HelpList,
  tasks: TaskList,
  undefined: () => <div>Error loading tab</div>,
};

export default function TabsContent({ path, path: { index: tabIndex } = {} }) {
  const { uiTreeSDK: tabs } = useContext(WalkmeSDKContext);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    setActiveTab(tabs[tabIndex]);
  }, [tabIndex]);

  const ListTypeComponent = contentTypeToComponentDictionary[activeTab.properties.tabType];
  return <ListTypeComponent content={activeTab.childNodes} />;
}
