import React from 'react';
import FancyInput from "./FancyInput";

const FancyInputRoot = () => {
  let refFancyInput = null;
  const handleOnClick = () => {
    console.log(refFancyInput);
    refFancyInput.value = 'lebron james'
  };
  return (
    <div>
      <FancyInput ref={(ref)=>refFancyInput=ref}/>
      <button onClick={handleOnClick}>호출</button>
    </div>
  );
};

export default FancyInputRoot;
