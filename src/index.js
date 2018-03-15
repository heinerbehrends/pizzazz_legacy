import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RandomLetters from './RandomLetters';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<RandomLetters />, document.getElementById('root'));
registerServiceWorker();
