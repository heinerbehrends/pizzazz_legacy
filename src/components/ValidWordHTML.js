import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrabbleBoard from './styled/ValidWordHTMLStyled'
import DraggableTile from './DraggableTile'
import { letterValues } from '../Constants'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { replaceLetterAction, showValidAction } from '../actions/gameActions'


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
      <ScrabbleBoard>
        { tilesArray }
      </ScrabbleBoard>
    );
  }
}

const mapStateToProps = state => {
  return { validWord: state.validWord,
           showValid: state.showValid,
           potentialScore: state.potentialScore }
}

export default connect(mapStateToProps)(ValidWordHTML);
