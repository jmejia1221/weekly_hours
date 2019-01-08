import React from 'react';
import ReactDOM from 'react-dom';

// Docs Data
import data from '../__docs__/data.json';

// Components
import App from '../app/app'

ReactDOM.render(
  <App data={data} />,
  document.getElementById('app')
);