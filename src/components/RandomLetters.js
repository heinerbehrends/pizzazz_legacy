import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LetterContainer from './styled/RandomLettersStyled'
import makeTilesArray from '../componentLogic/makeTilesArray'


class RandomLetters extends PureComponent {

  render() {
    const { isCountdown, randomLetters } = this.props;
    const tilesArray = makeTilesArray(isCountdown, randomLetters, false, 'randomLetters');;

    return (
      <LetterContainer>
        { tilesArray }
      </LetterContainer>
    );
  }
}

RandomLetters.propTypes = {
  isCountdown: PropTypes.bool,
  randomLetters: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
  return {
    randomLetters: state.randomLetters,
    isCountdown: state.isCountdown,
  };
}

export default connect(mapStateToProps)(RandomLetters);
