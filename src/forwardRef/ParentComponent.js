import React, {useRef} from 'react';
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const refChild = useRef(null);
  const handleOnClick = () => {
    console.log(refChild);
  };
  return (
    <div>
      <ChildComponent ref={refChild}/>
      <button onClick={handleOnClick}>부모에서 자식 메소드 호출</button>
    </div>
  );
};

export default ParentComponent;
