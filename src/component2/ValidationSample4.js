import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample4 extends Component {

  // refInputPassword = React.createRef();

  refInputPassword = null;

  state = {
    sttInputPassword: {
      value: '',
      className: '',
    },
  };

  handleOnClick = () => {
    const password = this.state.sttInputPassword.value;
    if (password==='0000') {
      this.setState((prev)=> ({
        ...prev,
        sttInputPassword: {
          ...prev.sttInputPassword,
          className: 'success'
        }
      }));
    } else {
      this.setState((prev)=> ({
        ...prev,
        sttInputPassword: {
          ...prev.sttInputPassword,
          className: 'failure'
        }
      }));
    }
    this.refInputPassword.focus();
  };

  handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleOnClick();
    }
  };

  handleOnChange = (event) => {
    this.setState((prev) => {
      return {
        ...prev,
        sttInputPassword: {
          ...prev.sttInputPassword,
          value: event.target.value,
        },
      };
    });
  };

  render() {
    return (
      <div>
        <input
          onKeyPress={this.handleOnKeyPress}
          // ref={this.refInputPassword}
          ref={(ref)=>{this.refInputPassword = ref}}
          className={this.state.sttInputPassword.className}
          value={this.state.sttInputPassword.value}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleOnClick}>확인</button>
      </div>
    );
  }
}

export default ValidationSample4;
