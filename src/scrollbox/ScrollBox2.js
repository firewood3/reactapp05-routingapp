import React, {Component} from 'react';
import './ScrollBox.css';

class ScrollBox2 extends Component {

  scrollToBottom = () => {
    const {scrollHeight, clientHeight} = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    return (
      <>
        <div className={'outer'} ref={(ref)=>{this.box=ref}}>
          <div className={'inner'}/>
        </div>
        {/*<button onClick={this.scrollToBottom}>맨 밑으로</button>*/}
      </>
    );
  }
}

export default ScrollBox2;
