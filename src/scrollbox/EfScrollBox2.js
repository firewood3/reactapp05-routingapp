import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import './ScrollBox.css';

const EfScrollBox2 = forwardRef((props, ref) => {

  let refBox = null;

  const scrollToBottom = () => {
    const {scrollHeight, clientHeight} = refBox;
    refBox.scrollTop = scrollHeight - clientHeight;
  };

  useImperativeHandle(ref,()=> {
    return {
      scrollToBottom
    }
  });

  return (
    <div>
      <div className={'outer'} ref={(ref)=>{refBox = ref}}>
        <div className={'inner'}></div>
      </div>
      <button onClick={scrollToBottom}>맨 밑으로</button>
    </div>
  );
});

export default EfScrollBox2;
