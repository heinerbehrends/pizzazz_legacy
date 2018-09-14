import React from 'react';
import { render } from 'react-dom';
import './index.css';
import rootReducer  from './reducers/rootReducer';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import 'normalize.css/normalize.css'

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: "3d2256d4fd0ec99b3854",
    cluster: 'eu',
    encrypted: true
});



const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
