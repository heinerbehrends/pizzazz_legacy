import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RandomLettersStyled from './styled/RandomLettersStyled';
import LetterRow from './LetterRow';

const RandomLetters = ({ isDraggable, randomLetters }) => (
  <RandomLettersStyled>
    <LetterRow
      isDraggable={isDraggable}
      letters={randomLetters}
      parent="randomLetters"
    />
  </RandomLettersStyled>
);

RandomLetters.propTypes = {
  isDraggable: PropTypes.bool.isRequired,
  randomLetters: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  randomLetters: state.randomLetters,
  isDraggable: state.isCountdown,
});


export default connect(mapStateToProps)(RandomLetters);
