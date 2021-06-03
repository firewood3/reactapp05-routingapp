import React from 'react';

const EfRef2 = () => {
  let refPwInput = null;

  const handleOnClick = () => {
    refPwInput.focus();
  };

  return (
    <div>
      <input ref={(ref) => {refPwInput = ref}} name={'password'} />
      <button onClick={handleOnClick}>Validation</button>
    </div>
  );
};

export default EfRef2;
