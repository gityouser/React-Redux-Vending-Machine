import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from react-redux;

import App from './containers/App';

import './styles/main.scss';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);