import React, { Component } from 'react'
import { connect } from 'react-redux'
import DraggableTile from './DraggableTile'
import { LetterContainer } from './RandomLettersHTML'
import { letterValues } from '../Constants'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { replaceLetterAction, showValidAction } from '../actions'


class ValidWordHTML extends Component {
  render() {
    const tilesArray = [];
    let i = 0;
    console.log(this.props.showValid);
    for (let randomLetter of this.props.validWord) {
      tilesArray.push(
        <DraggableTile
          letter={ randomLetter }
          letterValues={ letterValues }
          string = { this.props.validWord  }
          showValid = { this.props.showValid > i }
          index={ i }
          key={ i }
          parent="validWord"
          replaceLetter={ replaceLetter }
          replaceLetterAction={ replaceLetterAction }
          showValidAction={ showValidAction }
        />
      )
      i++;
    }
    return (
      <LetterContainer>
        { tilesArray }
      </LetterContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return { validWord: state.validWord,
           showValid: state.showValid,
           potentialScore: state.potentialScore }
}

export default connect(mapStateToProps)(ValidWordHTML);
