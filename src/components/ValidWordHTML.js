import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ScrabbleBoard from './styled/ValidWordHTMLStyled'
import makeTilesArray from '../componentLogic/makeTilesArray'

class ValidWordHTML extends PureComponent {

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

ValidWordHTML.propTypes = {
  validWord: PropTypes.string.isRequired,
  showValid: PropTypes.number.isRequired,
  isCountdown: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  validWord: state.validWord,
  showValid: state.showValid,
  isCountdown: state.isCountdown,
})

export default connect(mapStateToProps)(ValidWordHTML);
