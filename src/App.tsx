import React from 'react';

import WalkmeSDKProvider from './providers/WalkmeSDKProvider';
import Layout from './components/Layout';

import './App.css';

function App() {
  return (
    <WalkmeSDKProvider>
      <div className="App">
        <Layout />
      </div>
    </WalkmeSDKProvider>
  );
}

export default App;
