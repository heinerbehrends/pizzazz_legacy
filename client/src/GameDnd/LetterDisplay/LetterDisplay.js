import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LetterDisplayStyled from './LetterDisplayStyled';
import LetterRow from '../LetterRow/LetterRow';

const LetterDisplay = ({ isDraggable, letterDisplay }) => (
  <LetterDisplayStyled>
    <LetterRow
      isDraggable={isDraggable}
      letters={letterDisplay}
      parent="letterDisplay"
    />
  </LetterDisplayStyled>
);

LetterDisplay.propTypes = {
  isDraggable: PropTypes.bool.isRequired,
  letterDisplay: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  letterDisplay: state.letterDisplay,
  isDraggable: state.isCountdown,
});


export default connect(mapStateToProps)(LetterDisplay);
