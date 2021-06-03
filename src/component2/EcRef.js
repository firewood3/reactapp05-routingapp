import React, { Component } from 'react';

class EcRef extends Component {
  // createRef 함수를 사용한 ref
  refPwInput = React.createRef();

  handleOnClick = () => {
    // createRef 함수를 사용해 ref를 정의하면 .current를 통해 DOM에 접근 가능
    this.refPwInput.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.refPwInput} />
        <button onClick={this.handleOnClick}>Validate</button>
      </div>
    );
  }
}

export default EcRef;
