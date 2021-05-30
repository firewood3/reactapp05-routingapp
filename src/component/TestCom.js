import React, {Component} from 'react';

class TestCom extends Component {
  constructor(props) {
    super(props);
    this.state = { num : 1 };
  }
  handler = () => {
    this.setState((st) => ({
      num : st.num+1
    }));
  }
  render() {
    return (
      <div>
        {this.state.num}
        <button onClick={this.handler}>++</button>
      </div>
    );
  }
}

export default TestCom;
