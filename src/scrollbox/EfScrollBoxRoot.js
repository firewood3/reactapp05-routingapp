import React, {useEffect, useRef} from 'react';
import EfScrollBox from "./EfScrollBox";

const EfScrollBoxRoot = () => {
  const refEfScrollBox = useRef(null);
  // let refEfScrollBox = null;

  useEffect(() => {
    console.log(refEfScrollBox.current);
  }, [refEfScrollBox]);

  const handleOnClick = () => {
    console.log(refEfScrollBox);
  };

  return (
    <div>
      <EfScrollBox ref={refEfScrollBox}/>
      <button onClick={handleOnClick}>맨 밑으로</button>
    </div>
  );
};

export default EfScrollBoxRoot;
