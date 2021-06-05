import React, {useRef} from 'react';
import EfScrollBox3 from "./EfScrollBox3";

const EfScrollBoxRoot3 = () => {

  const refScrollBox = useRef();

  const scrollToBottom = () => {
    refScrollBox.current.scrollToBottom();
  };

  const scrollToTop = () => {
    refScrollBox.current.scrollToTop();
  };

  return (
    <div>
      <EfScrollBox3 ref={refScrollBox}/>
      <button onClick={scrollToBottom}>부모 맨밑으로</button>
      <button onClick={scrollToTop}>부모 맨 위로</button>
    </div>
  );
};

export default EfScrollBoxRoot3;
