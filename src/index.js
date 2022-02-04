import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import './index.css';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
