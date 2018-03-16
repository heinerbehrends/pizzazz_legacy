import React from 'react'
import {connect} from 'react-redux'
import {Letter} from './RandomLetters'

const ValidWord = (props) => {
  return (
    <div className="border-bottom mt-5">
      <Letter string={ props.validWord[0] } />
      <Letter string={ props.validWord[1] } />
      <Letter string={ props.validWord[2] } />
      <Letter string={ props.validWord[3] } />
      <Letter string={ props.validWord[4] } />
      <Letter string={ props.validWord[5] } />
      <Letter string={ props.validWord[6] } />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { validWord: state.validWord }
}

 export default connect(mapStateToProps)(ValidWord);
