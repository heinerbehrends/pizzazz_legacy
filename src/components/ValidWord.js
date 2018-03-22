import React, { Component } from 'react'
import { connect } from 'react-redux'
import Letter from './Letter'
  
class ValidWord extends Component {
  render() {
    const sevenLetters = [];
    for (let i = 0; i < 7; i++) {
      sevenLetters.push(
        <Letter string={ this.props.validWord }
        index={i} parent="validWord" key={i}
        replaceLetter={ this.props.replaceLetter } />
      )
    }

    return (
      <div className="border-bottom mt-5">
          {sevenLetters}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { validWord: state.validWord }
}

export default connect(mapStateToProps)(ValidWord);
