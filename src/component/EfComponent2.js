import React, {useState} from 'react';

const EfComponent2 = () => {
  const [state, setState] = useState({message: ''});

  const onChangeHandler = (event) => {
    setState((prev)=> {
      return {
        ...prev,
        message: event.target.value
      }
    });
  }

  const onClickHandler = () => {
    alert(state.message)
    setState((prev)=> {
      return {
        ...prev,
        message: ''
      }
    });
  }

  return (
    <div>
      <input
        type={"text"}
        name={"message"}
        placeholder={"함수형 아무거나 입력해보세요."}
        value={state.message}
        onChange={onChangeHandler}
        />
      <button onClick={onClickHandler}>확인</button>
    </div>
  );
};

export default EfComponent2;
