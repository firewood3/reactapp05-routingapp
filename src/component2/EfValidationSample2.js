import React, {useRef, useState} from 'react';
import './ValidationSample.css';

const EfValidationSample2 = () => {
  const [inputPassword, setInputPassword] = useState({
    value: '',
    className: '',
  });

  const refInputPassword = useRef(null);

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
    refInputPassword.current.focus();
  };

  const handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleOnClick()
    }
  }

  return (
    <div>
      <input
        ref={refInputPassword}
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

export default EfValidationSample2;
