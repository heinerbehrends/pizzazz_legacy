import React from 'react';
import './App.css';
import {connect} from 'react-redux';

function Letter(props) {
  return <img style={{width: 66 + 'px'}} src={'images/' + props.string[props.index] + '.jpg'}/>
}

function RandomLetters(props) {
  console.log(props);
  return (
    <div className="App">
    <Letter string={props.randomLetters} index='0'/>
    <Letter string={props.randomLetters} index='1'/>
    <Letter string={props.randomLetters} index='2'/>
    <Letter string={props.randomLetters} index='3'/>
    <Letter string={props.randomLetters} index='4'/>
    <Letter string={props.randomLetters} index='5'/>
    <Letter string={props.randomLetters} index='6'/>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state.randomLetters);
  return { randomLetters: state.randomLetters };
}

export default connect(mapStateToProps)(RandomLetters);
