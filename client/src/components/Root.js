import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    randomLetters: PropTypes.string,
    scrabbleBoard: PropTypes.string,
    isValidIndex: PropTypes.number,
    screenName: PropTypes.string,
    messageTop: PropTypes.string,
    isCountdown: PropTypes.bool,
    countdownValue: PropTypes.number,
    solutions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    gameData: PropTypes.object,
    canJoin: PropTypes.bool,
  }).isRequired,
};

export default Root;
