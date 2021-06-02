import React, {useState} from 'react';

const EfComponent3 = () => {
  const [state, setState] = useState({
    message1: '',
    message2: '',
    fixedMessage: 'Fixed Message'
  });

  const onChangeHandler = (event) => {
    setState((prev)=> ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  const onCheckHandler = () => {
    setState((prev)=> ({
      ...prev,
      message1: '',
      message2: ''
    }));
  }

  const onKeyPressHandler = () => {
    onCheckHandler();
  }

  return (
    <div>
      <h2>{state.fixedMessage}</h2>
      <input onChange={onChangeHandler} name={'message1'} value={state.message1}/><br/>
      <input onKeyPress={onKeyPressHandler} onChange={onChangeHandler} name={'message2'} value={state.message2}/><br/>
      <button onClick={onCheckHandler}>확인</button>
    </div>
  );
};

export default EfComponent3;
