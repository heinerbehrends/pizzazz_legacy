import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import DraggableTile from './DraggableTile'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { letterValues } from '../Constants'
import { randomLettersAction, replaceLetterAction, showValidAction } from '../actions'

export const LetterContainer = styled.div`
  padding: 4.1px;
  margin: 0 auto 40px auto;
  list-style: none;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  max-width: 500px;
`;

class RandomLettersHTML extends Component {

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

const mapStateToProps = (state) => {
  return { randomLetters: state.randomLetters };
}

const mapDispatchToProps = dispatch => {
  return { newRandomLetters: (string) => dispatch(randomLettersAction(string))   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomLettersHTML);
