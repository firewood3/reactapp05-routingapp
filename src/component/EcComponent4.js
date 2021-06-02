import React, {Component} from 'react';

class EcComponent4 extends Component {
  state = {
    message1: '',
    message2: '',
    fixedMessage: 'Fixed Message'
  }

  input1Change = (event) => {
    this.setState(()=> {
      return {
        message1: event.target.value
      }
    });
  }

  input2Change = (event) => {
    this.setState(()=> {
      return {
        message2: event.target.value
      }
    });
  }

  checkOnClick = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>{this.state.fixedMessage}</h2>
        <input value={this.state.message1} onChange={this.input1Change}/> <br/>
        <input value={this.state.message2} onChange={this.input2Change}/> <br/>
        <button onClick={this.checkOnClick}>확인</button>
      </div>
    );
  }
}

export default EcComponent4;
