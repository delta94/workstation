import React, { useContext, useState, useEffect } from 'react';
import { WalkmeSDKContext } from '../../providers/WalkmeSDKProvider';

import ActionBotLayout from '../ActionBotLayout';

const contentTypeToComponentDictionary = {
  ['action-bot']: ActionBotLayout,
};

function ImmutableLayouts({ onDeselectActiveSection }) {
  const {
    state: {
      ui: { location },
    },
  } = useContext(WalkmeSDKContext);
  const [loadedComponents, setLoadedComponents] = useState(new Set());

  useEffect(() => {
    if (!!contentTypeToComponentDictionary[location.contentType]) {
      setLoadedComponents(loadedComponents.add(location.contentType));
    }
  }, [location]);

  const ImmutableComponents = [...loadedComponents].map((componentName, index) => {
    const CurrentComponent = contentTypeToComponentDictionary[componentName];
    return (
      <CurrentComponent
        key={index}
        location={location}
        onDeselectSection={onDeselectActiveSection}
        isVisible={location.contentType === componentName}
      />
    );
  });

  return <>{ImmutableComponents}</>;
}

export default ImmutableLayouts;
