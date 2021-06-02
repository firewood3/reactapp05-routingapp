import React, {useState} from 'react';

const EfComponent = () => {
  const [state, setState] = useState({txt: '', fixedTxt: 'txt'});

  const onChangeHandler = (event) => {
    setState((prev)=> {
      return {
        ...prev,
        txt: event.target.value
      }
    });
  }

  return (
    <div>
      <h2>FixedTxt : {state.fixedTxt}</h2>
      <input onChange={onChangeHandler}/>
      <p>{state.txt}</p>
    </div>
  );
};

export default EfComponent;
