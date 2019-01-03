import React from 'react';
import ReactDOM from 'react-dom';

// Docs Data
import data from '../__docs__/data.json';

// Components
import Home from '../components/home/home'

ReactDOM.render(
  <Home data={data} />,
  document.getElementById('app')
);