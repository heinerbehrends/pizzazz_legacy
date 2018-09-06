import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { sendNameAction, firstPlayerAction } from '../actions/apiActions'

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
`;

const HiddenLabel = styled.label`
  display: none!important;
`;

const FormGroup = styled.div`
  flex: 0 0 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-box-flex: 0;
`;

const ButtonInput = styled.input`
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: .375rem .75rem;
  margin-right: 5px;
  color: #495057;
  border: 1px solid #ced4da;
  background-color: #fff;
  &:focus {
    outline-color: #B4EAFF;
  }
`;

const TextInput = ButtonInput.extend`
  background-color: #fff;
`;

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
      <FormContainer>
        <Form id="screenName" name="screenName" className="form-inline" onSubmit={this.sendScreenName}>
          <HiddenLabel htmlFor="enter-screen-name">Screen name</HiddenLabel>
          <FormGroup>
            <TextInput onChange={this.handleChange} type="text" id="enter-screen-name" name="screenName" autoFocus />
            <ButtonInput type="submit" value="Submit" />
          </FormGroup>
        </Form>
      </FormContainer>
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
