import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {

  refPasswordInput = null;

  state = {
    passwordInput: {
      value: '',
      className: ''
    }
  };

  handleOnClick = () => {
    const password = this.state.passwordInput.value;
    if( password==='0000' ) {
      this.setState((prev)=>({
        passwordInput: {
          ...prev.passwordInput,
          className: 'success'
        }
      }));
    } else {
      this.setState((prev)=>({
        passwordInput: {
          ...prev.passwordInput,
          className: 'failure'
        }
      }));
    }
    this.refPasswordInput.focus();
  };

  handleOnChange = (event) => {
    console.log(this.state.passwordInput)
    this.setState((prev)=>({
      passwordInput: {
        ...prev.passwordInput,
        value:  event.target.value
      }
    }));
  }

  handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleOnClick();
    }
  }

  render() {
    return (
      <div>
        <input
          onKeyPress={this.handleOnKeyPress}
          ref = {(ref)=> {this.refPasswordInput = ref}}
          className={this.state.passwordInput.className}
          value={this.state.passwordInput.value}
          type={'password'}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleOnClick}>Validate</button>
      </div>
    );
  }
}

export default ValidationSample;
