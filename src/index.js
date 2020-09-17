import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 第三方模块 styled-components 下的引入
import './style.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
