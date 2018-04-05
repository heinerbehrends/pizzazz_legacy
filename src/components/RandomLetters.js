import React, { Component } from 'react'
import { connect } from 'react-redux'
import Letter from './Letter'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { replaceLetterAction, showValidAction } from '../actions'
import { randomLettersAction } from '../actions'


class RandomLetters extends Component {
  render() {
    const sevenLetters = [];
    for (let i = 0; i < 7; i++) {
      sevenLetters.push(
        <Letter string={ this.props.randomLetters }
        index={i} parent='randomLetters' key={i}
        replaceLetter={ replaceLetter } replaceLetterAction={ replaceLetterAction }
        showValidAction={ showValidAction } />
        )
    }
    return (
      <div className="border-bottom">
        {sevenLetters}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { randomLetters: state.randomLetters };
}

const mapDispatchToProps = dispatch => {
  return { newRandomLetters: (string) => dispatch(randomLettersAction(string))   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomLetters);
