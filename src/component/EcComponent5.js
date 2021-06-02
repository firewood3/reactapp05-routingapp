import React, {Component} from 'react';

class EcComponent4 extends Component {
  state = {
    message1: '',
    message2: '',
    fixedMessage: 'Fixed Message'
  }

  messageChange = (event) => {
    console.log(event.target);
    this.setState(()=> {
      return {
        [event.target.name]: event.target.value
      };
    });
  }

  checkOnClick = () => {
    this.setState(()=>({
      message1: '',
      message2: ''
    }));
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.checkOnClick();
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.fixedMessage}</h2>
        <input name={'message1'} value={this.state.message1} onChange={this.messageChange}/> <br/>
        <input onKeyPress={this.handleKeyPress} name={'message2'} value={this.state.message2} onChange={this.messageChange}/> <br/>
        <button onClick={this.checkOnClick}>확인</button>
      </div>
    );
  }
}

export default EcComponent4;
