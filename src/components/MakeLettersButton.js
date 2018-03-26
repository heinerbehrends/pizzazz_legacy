import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeRandomLettersVowelsAction } from '../actions'
import { makeMoveAction } from '../actions'
import { getScoreWildcard } from '../scrabbleLogic/findWords'
import { letterValues } from '../Constants'

class MakeRandomLettersButton extends Component {
  render() {
    var validWord = this.props.validWord.substring(0, this.props.isValidIndex);
    var potentialScore = getScoreWildcard(validWord, letterValues);
    console.log(potentialScore);
    var index = this.props.index;
    var buttonState = this.props.buttonState;

    if (buttonState === 'init') {
      console.log('init');
      return (
        <button className = "btn btn-outline-secondary mt-5" onClick={ this.props.makeRandomLetters } >
          Make Random Letters
        </button>
      )
    } else if (buttonState === 'disabled') {
      return (
        <p className = "text-secondary mt-5 pt-2">
          Move Letters To Form A Word
        </p>
      )
    } else {
      return (
        <button className = "btn btn-outline-secondary mt-5" word = { validWord }
         score = { potentialScore } onClick={ () => this.props.makeMove(validWord, potentialScore, index) } >
          { 'Play ' + validWord + ' For ' + potentialScore + ' Points'}
        </button>
      )
    }
  }
}


      // <button className={ "btn btn-outline-secondary mt-5" + (buttonState === 'disabled' ? " border-0" : '')}
      //         onClick={ this.props.makeRandomLetters } >
      //
      //         { (buttonState === 'init') ? 'Make Random Letters' : '' }
      // }
      //         { (buttonState === 'disabled') ? 'Move Letters to form a word' : '' }
      //         { ((buttonState === 'play') ? 'Play ' + validWord + ' for ' + potentialScore + ' points' : '')}
      // </button>

const mapStateToProps = state => {
  return {
    validWord: state.validWord,
    isValidIndex: state.showValid,
    buttonState: state.buttonState,
    index: state.showValid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeRandomLetters: () => dispatch(makeRandomLettersVowelsAction()),
    makeMove: (word, score, index) => dispatch(makeMoveAction(word, score, index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeRandomLettersButton)
