import React, { Component } from 'react'
import { connect } from 'react-redux'
import { randomLettersAction } from '../actions/gameActions'
import LetterContainer from './styled/RandomLettersStyled'
import makeTilesArray from '../scrabbleLogic/makeTilesArray'


class RandomLetters extends Component {

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

const mapStateToProps = state => {
  return {
    randomLetters: state.randomLetters,
    isCountdown: state.isCountdown
  };
}

const mapDispatchToProps = dispatch => {
  return { newRandomLetters: string => dispatch(randomLettersAction(string))   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomLetters);
