import React, { useEffect } from 'react';

import WalkmeSDKProvider from './providers/WalkmeSDKProvider';
import Layout from './components/Layout';

import './App.css';

function App() {
  function addGuidSpecificStyle() {
    const search = new URLSearchParams(window.location.search);
    const guid = search.get('guid');
    const cssSrc = `styles/${guid}/main.css`;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssSrc;

    document.body.append(link);
  }

  useEffect(() => {
    addGuidSpecificStyle();
  }, []);

  return (
    <WalkmeSDKProvider>
      <div className="App">
        <Layout />
      </div>
    </WalkmeSDKProvider>
  );
}

export default App;
