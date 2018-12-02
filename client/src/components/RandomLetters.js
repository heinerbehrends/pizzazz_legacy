import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LetterContainer from './styled/RandomLettersStyled';
import LetterRow from './LetterRow';


class RandomLetters extends PureComponent {
  render() {
    const { isDraggable, randomLetters } = this.props;
    return (
      <LetterContainer>
        <LetterRow
          isDraggable={isDraggable}
          letters={randomLetters}
          parent="randomLetters"
        />
      </LetterContainer>
    );
  }
}

RandomLetters.propTypes = {
  isDraggable: PropTypes.bool.isRequired,
  randomLetters: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  randomLetters: state.randomLetters,
  isDraggable: state.isCountdown,
});


export default connect(mapStateToProps)(RandomLetters);
