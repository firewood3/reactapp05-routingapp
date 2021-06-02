import React, {Component} from 'react';

class EcComponent3 extends Component {
  state = {
    message: '',
    fixedMessage: 'Fixed Message'
  }

  constructor(props) {
    super(props);
    // this.onClickHandler = this.onClickHandler.bind(this);
    // this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  // transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의하는 방법
  onChangeHandler = (event)=> {
    console.log(this.state.message)
    this.setState(()=> {
      return {
        message : event.target.value
      }
    });
  }

  // 기본 정의방식 this를 바인딩 해야함
  // onChangeHandler(event) {
  //   console.log(this)
    // console.log(this.state.message)
    // this.setState(()=> {
    //   return {
    //     message : event.target.value
    //   }
    // });
  // }

  onClickHandler() {
    alert(this.state.message)
    this.setState(()=> {
      return {
        message : ''
      }
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.fixedMessage}</h2>
        <input
          placeholder={"이번엔 메서드"}
          type={"text"}
          value={this.state.message}
          onChange={this.onChangeHandler}
        />
        <button onClick={this.onClickHandler}>확인</button>
      </div>
    );
  }
}

export default EcComponent3;
