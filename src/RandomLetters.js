import React from 'react';
import {connect} from 'react-redux';

const Letter = (props) =>   {
  return <img style={{width: 66 + 'px'}} src={'images/' + props.string + '.jpg'}/>
}

const RandomLetters = (props) => {
  console.log(props);
  return (
    <div className="border-bottom">
      <Letter string={props.randomLetters[0]} />
      <Letter string={props.randomLetters[1]} />
      <Letter string={props.randomLetters[2]} />
      <Letter string={props.randomLetters[3]} />
      <Letter string={props.randomLetters[4]} />
      <Letter string={props.randomLetters[5]} />
      <Letter string={props.randomLetters[6]} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { randomLetters: state.randomLetters };
}

export { Letter };
export default connect(mapStateToProps)(RandomLetters);
