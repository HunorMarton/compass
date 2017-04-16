// Set up your application entry point here.../* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Compass from './containers/Compass';

require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.


render(
  <AppContainer>
    <Compass />
  </AppContainer>,
  document.getElementById('app')
);
