import React, { useContext, useState, useEffect } from 'react';

import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import HelpList from '../HelpList';
import TaskList from '../TaskList';

const contentTypeToComponentDictionary = {
  help: HelpList,
  tasks: TaskList,
  undefined: () => <div>Error loading tab</div>,
};

export default function TabsContent({ location: { index: tabIndex } }) {
  const {
    state: {
      sdk: { uiTreeSDK: tabs },
    },
  } = useContext(WalkmeSDKContext);
  const [activeTab, setActiveTab] = useState(tabs[tabIndex]);

  useEffect(() => {
    setActiveTab(tabs[tabIndex]);
  }, [tabIndex]);

  const ListTypeComponent = contentTypeToComponentDictionary[activeTab.properties.tabType];
  return <ListTypeComponent content={activeTab.childNodes} />;
}
