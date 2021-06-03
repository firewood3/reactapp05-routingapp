import React, {useRef, useState} from 'react';
import './ValidationSample.css';

const EfValidationSample3 = () => {
  const [inputPassword, setInputPassword] = useState({
    value: '',
    className: '',
  });

  let refInputPassword = null;

  const handleOnChange = (event) => {
    console.log(inputPassword)
    setInputPassword((prev) => {
      return {
        ...prev,
        value: event.target.value,
      };
    });
  };

  const handleOnClick = () => {
    const password = inputPassword.value;
    if (password === '0000') {
      setInputPassword((prev) => ({
        ...prev,
        className: 'success',
      }));
    } else {
      setInputPassword((prev) => ({
        ...prev,
        className: 'failure',
      }));
    }
    refInputPassword.focus();
  };

  const handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleOnClick()
    }
  }

  return (
    <div>
      <input
        ref={(ref)=>{refInputPassword=ref}}
        value={inputPassword.value}
        className={inputPassword.className}
        onChange={handleOnChange}
        type={'password'}
        onKeyPress={handleOnKeyPress}
      />
      <button onClick={handleOnClick}>validation</button>
    </div>
  );
};

export default EfValidationSample3;
