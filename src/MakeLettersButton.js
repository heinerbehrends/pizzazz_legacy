import React from 'react'
import {connect} from 'react-redux'

const MakeRandomLettersButton = ({makeRandomLetters}) => {
  console.log(makeRandomLetters);
  return (
    <button className="btn btn-outline-secondary mt-5" onClick={makeRandomLetters}>Make Random Letters</button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    makeRandomLetters: () => dispatch({
      type: 'makeRandomLetters'
    })
  }
}

export default connect(null, mapDispatchToProps)(MakeRandomLettersButton)
