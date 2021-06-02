import React, {Component} from 'react';

class ClassicComponent extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  }
  constructor(props) {
    super(props);
    /*this.state = {
      number: 0
    }*/
  }

  handler = () => {
    // 2씩 증가되지 않음
    // this.setState({number: this.state.number + 1});
    // this.setState({number: this.state.number + 1});
    // 2씩 증가 됨
    this.setState((prevState, props)=> {
      return {
        number : prevState.number + 1
      }
    });
    this.setState((prevState, props)=> {
      return {
        number : prevState.number + 1
      }
    });
  }

  render() {
    return (
      <div>
        <h2>고정된 수: {this.state.fixedNumber}</h2>
        <button onClick={this.handler}>플러스</button>
        {this.state.number}
      </div>
    );
  }
}

export default ClassicComponent;
