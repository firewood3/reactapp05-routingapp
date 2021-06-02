import React, {Component} from 'react';

class EcComponent2 extends Component {

  state = {
    message: ''
  }

  onChangeHandler = (event) => {
    this.setState(() => {
      return {
        message: event.target.value
      }
    });
  }

  onClickEvent = () => {
    alert(this.state.message);
    this.setState(() => {
      return {
        message: ''
      }
    });
  }

  render() {
    return (
      <div>
        <input
          type={"text"}
          name={"message"}
          placeholder={"아무거나 입력해 보세요"}
          value={this.state.message}
          onChange={this.onChangeHandler}
        />
        <button onClick={this.onClickEvent}>확인</button>
      </div>
    );
  }
}

export default EcComponent2;
