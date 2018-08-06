import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firstPlayerAction, sendNameAction } from '../actions'

class ScreenName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.sendScreenName = this.sendScreenName.bind(this);
  }
  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  sendScreenName(event) {
    event.preventDefault();
    const screenName = this.state.screenName;
    this.props.sendName(screenName);
  }
  render() {
    return (
      <div className="d-flex justify-content-center mt-5">
        <form id="screenName" name="screenName" className="form-inline" onSubmit={this.sendScreenName}>
          <label className="sr-only" htmlFor="enter-screen-name">Screen name</label>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control border-right-0 rounded-0" type="text" size="35" id="enter-screen-name" name="screenName" autoFocus />
            <input className="form-control rounded-0" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    firstPlayer: boolean => dispatch(firstPlayerAction(boolean)),
    sendName: name => dispatch(sendNameAction(name))
  }
}

export default connect(null, mapDispatchToProps)(ScreenName)
