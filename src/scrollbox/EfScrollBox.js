import React, {useEffect} from 'react';
import './ScrollBox.css';

const EfScrollBox = ({forwardRef}) => {

  let box = null;

  const scrollToBottom = () => {
    // console.log(props);
    const {scrollHeight, clientHeight} = box;
    box.scrollTop = scrollHeight - clientHeight;
  };

  useEffect(() => {
    console.log(forwardRef)
    // console.log('props',props);
  }, []);

  return (
    <>
      <div className={'outer'} ref={(ref) => box = ref}>
        <div className={'inner'}/>
      </div>
      {/*<button onClick={scrollToBottom}>dd</button>*/}
    </>
  );
};

export default EfScrollBox;
