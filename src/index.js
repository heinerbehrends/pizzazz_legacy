import React from 'react';
import { render } from 'react-dom';
import './index.css';
import rootReducer  from './reducers/rootReducer';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import Pusher from 'pusher-js'
import 'normalize.css/normalize.css'
import rootSaga from './sagas/rootSaga'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, thunk)
  )
);

sagaMiddleware.run(rootSaga)

// const action = type => store.dispatch({type})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
