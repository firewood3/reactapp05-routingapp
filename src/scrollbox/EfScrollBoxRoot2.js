import React, {useCallback, useRef} from 'react';
import EfScrollBox2 from "./EfScrollBox2";

const EfScrollBoxRoot2 = () => {

  const refChild = useRef(null);
  // let refChild = null;

  const childScrollToBottom = () => {
    console.log(refChild);
    // refChild.scrollToBottom();
    refChild.current.scrollToBottom();
  }

  return (
    <div>
      <EfScrollBox2 ref={refChild}/>
      <button onClick={childScrollToBottom}>부모 컴포넌트 맨 밑으로</button>
    </div>
  );
};

export default EfScrollBoxRoot2;
