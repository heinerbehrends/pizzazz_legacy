import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ScrabbleTile from './ScrabbleTile'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { letterValues } from '../Constants'
import { randomLettersAction, replaceLetterAction, showValidAction } from '../actions'

const LetterContainer = styled.div`
  padding: 0;
  margin: 0 auto;
  list-style: none;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  max-width: 500px;
`;

class RandomLettersHTML extends Component {

  render() {
    const tilesArray = [];
    for (let randomLetter of this.props.randomLetters) {
      tilesArray.push(
        <ScrabbleTile letter={ randomLetter } letterValues={ letterValues } />
      )
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
