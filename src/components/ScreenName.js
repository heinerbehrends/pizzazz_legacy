import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendNameAction } from '../actions/actions';
import {
  FormContainer, Form, FormGroup, HiddenLabel, ButtonInput, TextInput,
} from './styled/ScreenNameStyled';

class ScreenName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.sendScreenName = this.sendScreenName.bind(this);
  }

  handleChange(event) {
    const { state } = this;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  sendScreenName(event) {
    event.preventDefault();
    const { sendName } = this.props;
    const { screenName } = this.state;
    sendName(screenName);
  }

  render() {
    const { screenName } = this.props;
    return screenName.length ? null : (
      <FormContainer>
        <Form id="screenName" name="screenName" onSubmit={this.sendScreenName}>
          <HiddenLabel htmlFor="enter-screen-name">Screen name</HiddenLabel>
          <FormGroup>
            <TextInput onChange={this.handleChange} type="text" id="enter-screen-name" name="screenName" autoFocus />
            <ButtonInput type="submit" value="Submit" />
          </FormGroup>
        </Form>
      </FormContainer>
    );
  }
}

ScreenName.propTypes = {
  sendName: PropTypes.func.isRequired,
  screenName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  screenName: state.screenName,
});

const mapDispatchToProps = dispatch => ({
  sendName: name => dispatch(sendNameAction(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenName);
