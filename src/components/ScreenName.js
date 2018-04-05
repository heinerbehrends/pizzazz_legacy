import React, { Component } from 'react'
import axios from 'axios'

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
    console.log(this.state);
    axios.post('/api/screenName', {
      screenName
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="d-flex justify-content-center mt-5">
        <form id="screenName" name="screenName" className="form-inline" onSubmit={this.sendScreenName}>
          <label className="sr-only" htmlFor="enter-screen-name">Screen name</label>
          <div className="form-group">
            <input onChange={this.handleChange} className="form-control border-right-0 rounded-0" type="text" size="35" id="enter-screen-name" name="screenName" placeholder="Enter your screen name to play"/>
            <input className="form-control rounded-0" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default ScreenName
