import React, {Component} from 'react';

class EcRef2 extends Component {

  // 콜백 함수를 사용한 ref
  refPwInput = null;

  handleOnClick = () => {
    this.refPwInput.focus();
  }

  render() {
    return (
      <div>
        {/*콜백 함수를 사용한 ref*/}
        <input ref={(ref)=> {this.refPwInput = ref}}/>
        <button onClick={this.handleOnClick}>validation</button>
      </div>
    );
  }
}

export default EcRef2;
