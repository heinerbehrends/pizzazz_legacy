import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrabbleBoard from './styled/ValidWordHTMLStyled'
import makeTilesArray from '../scrabbleLogic/makeTilesArray'

class ValidWordHTML extends Component {
  render() {
    const { validWord, showValid, isCountdown } = this.props;
    let tilesArray = makeTilesArray(isCountdown, validWord, showValid, 'validWord');

    return (
      <ScrabbleBoard>
        { tilesArray }
      </ScrabbleBoard>
    );
  }
}

const mapStateToProps = state => {
  return {
    validWord: state.validWord,
    showValid: state.showValid,
    isCountdown: state.isCountdown,
         }
}

export default connect(mapStateToProps)(ValidWordHTML);
