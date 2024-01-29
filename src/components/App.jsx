import React, { Component } from 'react';
import { SignUpForm } from 'components/SignUpForm';

export class App extends Component {
  state = {
    inputValue: '',
  };

  // handleChange = evt => {
  //   this.setState({ inputValue: evt.target.value });
  // };

  render() {
    const { inputValue } = this.state;
    return <SignUpForm onSubmit={inputValue} />;
  }
}
