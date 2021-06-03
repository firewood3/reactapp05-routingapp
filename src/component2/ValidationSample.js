import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    passwordInput: {
      value: '',
      className: ''
    }
  };

  handleOnClick = () => {
    const password = this.state.passwordInput.value;
    if( password==='0000' ) {
      this.setState({
        passwordInput: {
          className: 'success'
        }
      });
    } else {
      this.setState({
        passwordInput: {
          className: 'failure'
        }
      });
    }
  };

  handleOnChange = (event) => {
    this.setState({
      passwordInput: {
        value:  event.target.value
      }
    });
  }

  render() {
    return (
      <div>
        <input
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
