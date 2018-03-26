import React, { Component } from 'react'
import { connect } from 'react-redux'
import Letter from './Letter'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { replaceLetterAction, showValidAction } from '../actions'


class ValidWord extends Component {
  render() {
    const sevenLetters = [];
    for (let i = 0; i < 7; i++) {
      sevenLetters.push(
        <Letter string={ this.props.validWord }
        index={i} parent="validWord" key={i} showValid={ this.props.showValid > i }
        replaceLetter={ replaceLetter } replaceLetterAction={ replaceLetterAction }
        showValidAction={ showValidAction }/>
      )
    }

    return (
      <div className="border-bottom mt-5">
          {sevenLetters}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { validWord: state.validWord,
           showValid: state.showValid,
           potentialScore: state.potentialScore }
}

export default connect(mapStateToProps)(ValidWord);
