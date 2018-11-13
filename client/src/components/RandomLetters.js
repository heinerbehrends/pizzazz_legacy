import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LetterContainer from './styled/RandomLettersStyled';
import makeTilesArray from '../clientLogic/makeTilesArray';


class RandomLetters extends PureComponent {
  render() {
    const { isCountdown, randomLetters } = this.props;
    const tilesArray = makeTilesArray(isCountdown, randomLetters, false, 'randomLetters');

    return (
      <LetterContainer>
        { tilesArray }
      </LetterContainer>
    );
  }
}

RandomLetters.propTypes = {
  isCountdown: PropTypes.bool.isRequired,
  randomLetters: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  randomLetters: state.randomLetters,
  isCountdown: state.isCountdown,
});


export default connect(mapStateToProps)(RandomLetters);
