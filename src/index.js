import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rootReducer  from './reducers/rootReducer';
import RandomLetters from './RandomLetters';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

store.dispatch({type:'makeRandomLetters'});

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <RandomLetters />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
