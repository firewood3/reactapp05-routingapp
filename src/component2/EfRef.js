import React, { useRef } from 'react';

const EfRef = () => {
  const refPwInput = useRef(null);

  const handleOnClick = () => {
    refPwInput.current.focus();
  };

  return (
    <div>
      <input ref={refPwInput} name={'password'} />
      <button onClick={handleOnClick}>Validation</button>
    </div>
  );
};

export default EfRef;
