import React, { useState } from 'react';
import './ValidationSample.css';

const EfValidationSample = () => {
  const [inputPassword, setInputPassword] = useState({
    value: '',
    className: '',
  });

  const handleOnChange = (event) => {
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
  };

  return (
    <div>
      <input
        value={inputPassword.value}
        className={inputPassword.className}
        onChange={handleOnChange}
        type={'password'}
      />
      <button onClick={handleOnClick}>validation</button>
    </div>
  );
};

export default EfValidationSample;
