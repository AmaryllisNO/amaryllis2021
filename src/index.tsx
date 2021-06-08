import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Portal from './Portal';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Portal />
  </React.StrictMode>,
  document.getElementById('root')
);
