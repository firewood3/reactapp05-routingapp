import React, {useRef, useState} from 'react';
import './ValidationSample.css';

const EfValidationSample4 = () => {

  const refInputPassword = useRef(null);

  const [sttInputPassword, setSttInputPassword] = useState({
    value: '',
    className: ''
  });

  const handleOnClick = () => {
    const password = sttInputPassword.value;
    if (password === '0000') {
      setSttInputPassword((prev)=> ({
        ...prev,
        className: 'success'
      }));
    } else {
      setSttInputPassword((prev)=> ({
        ...prev,
        className: 'failure'
      }));
    }
    refInputPassword.current.focus();
  };

  const handleOnChange = (event) => {
    setSttInputPassword((prev)=> ({
      ...prev,
      value: event.target.value
    }));
  };

  const handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleOnClick();
    }
  };

  return (
    <div>
      <input
        value={sttInputPassword.value}
        className={sttInputPassword.className}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
        ref={refInputPassword}
      />
      <button onClick={handleOnClick}>validation</button>
    </div>
  );
};

export default EfValidationSample4;
