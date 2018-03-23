import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeRandomLettersVowelsAction } from '../actions'
import { getScoreWildcard } from '../scrabbleLogic/findWords'
import { letterValues } from '../Constants'

class MakeRandomLettersButton extends Component {
  render() {
    var validWord = this.props.validWord.substring(0, this.props.isValidIndex);
    var potentialScore = getScoreWildcard(validWord, letterValues)
    console.log(this.props.validWord.substring(0, this.props.isValidIndex));
    console.log(potentialScore);
    var buttonState = this.props.buttonState;
    return (
      <button className={ "btn btn-outline-secondary mt-5" + (buttonState === 'disabled' ? " border-0" : '')}
              onClick={ this.props.makeRandomLetters } >
              { (buttonState === 'init') ? 'Make Random Letters' : '' }
              { (buttonState === 'disabled') ? 'Move Letters to form a word' : '' }
              { ((buttonState === 'play') ? 'Play ' + validWord + ' for ' + potentialScore + ' points' : '')}
      </button>
    )
  }
}

const mapStateToProps = state => {
  return {
    validWord: state.validWord,
    isValidIndex: state.showValid,
    buttonState: state.buttonState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeRandomLetters: () => dispatch(makeRandomLettersVowelsAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeRandomLettersButton)
