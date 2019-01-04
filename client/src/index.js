import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';
// import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root'), // eslint-disable-line no-undef
);

// registerServiceWorker();
