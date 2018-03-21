import React from 'react'
import { connect } from 'react-redux'
import { makeRandomLettersVowelsAction } from './actions'

const MakeRandomLettersButton = ({makeRandomLetters}) => {
  return (
    <button className="btn btn-outline-secondary mt-5" onClick={makeRandomLetters}>
      Make Random Letters
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    makeRandomLetters: () => dispatch(makeRandomLettersVowelsAction())
  }
}

export default connect(null, mapDispatchToProps)(MakeRandomLettersButton)
