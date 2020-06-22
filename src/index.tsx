import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import walkme from '@walkme/sdk';

import App from './App';
import './index.scss';

async function init() {
  try {
    await walkme.init();
  } catch (error) {
    console.error('Failed to initialize walkme SDK', error);
  }
}

init()
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
  .catch((e) => {
    console.error('Failed to initialize walkme SDK', e);
  });
