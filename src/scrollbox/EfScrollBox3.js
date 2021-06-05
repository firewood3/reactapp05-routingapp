import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import './ScrollBox.css';
const EfScrollBox3 = forwardRef((props, ref) => {

  const refOuterBox = useRef();

  const scrollToBottom = () => {
    const {scrollHeight, clientHeight} = refOuterBox.current;
    refOuterBox.current.scrollTop = scrollHeight - clientHeight;
  };

  const scrollToTop = () => {
    refOuterBox.current.scrollTop = 0;
  };

  useImperativeHandle(ref, ()=> {
    return {
      scrollToBottom,
      scrollToTop
    };
  });

  return (
    <div>
      <div className={'outer'} ref={refOuterBox}>
        <div className={'inner'}/>
      </div>
      <button onClick={scrollToBottom}>맨 아래로</button>
      <button onClick={scrollToTop}>맨 위로</button>
    </div>
  );
});


export default EfScrollBox3;
