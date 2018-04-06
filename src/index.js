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

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: "3d2256d4fd0ec99b3854",
    cluster: 'eu',
    encrypted: true
});

window.Echo.channel('pizzazz')
    .listen('StartGame', (event) => {
        console.log(event);
    });

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
