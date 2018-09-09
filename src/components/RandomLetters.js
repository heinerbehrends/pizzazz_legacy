import React, { Component } from 'react'
import { connect } from 'react-redux'
import DraggableTile from './DraggableTile'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { letterValues } from '../Constants'
import { randomLettersAction, replaceLetterAction, showValidAction } from '../actions/gameActions'
import LetterContainer from './styled/RandomLettersStyled'


class RandomLetters extends Component {

  render() {
    const tilesArray = [];
    let i = 0;
    for (let randomLetter of this.props.randomLetters) {
      tilesArray.push(
        <DraggableTile
          letter={ randomLetter }
          letterValues={ letterValues }
          string = { this.props.randomLetters }
          index={ i }
          key={ i }
          parent="randomLetters"
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

const mapStateToProps = state => {
  console.log(state.randomLetters);
  return { randomLetters: state.randomLetters };
}

const mapDispatchToProps = dispatch => {
  return { newRandomLetters: string => dispatch(randomLettersAction(string))   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomLetters);
