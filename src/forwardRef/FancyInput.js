import React from 'react';

const FancyInput = React.forwardRef((props, ref) => {

  return (
    <input ref={ref}>
    </input>
  );
});

export default FancyInput;
