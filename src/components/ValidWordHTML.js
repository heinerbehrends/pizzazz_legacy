import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import DraggableTile from './DraggableTile'
import { letterValues } from '../Constants'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { replaceLetterAction, showValidAction } from '../actions'

const LetterContainer = styled.div`
  background-image: url('images/pizzazzBoard.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
  padding: 1vw;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.05);
  margin: 0 auto 40px auto;
  list-style: none;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  max-width: 500px;
  @media screen and (min-width: 501px) {
    padding: 4.1px;
  }
`;

class ValidWordHTML extends Component {
  render() {
    const tilesArray = [];
    let i = 0;
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
