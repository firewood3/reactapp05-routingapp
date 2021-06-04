import React, {Component} from 'react';
import ScrollBox2 from "./ScrollBox2";

class ScrollBoxRoot2 extends Component {
  render() {
    return (
      <div>
        <ScrollBox2 ref={(ref)=>{this.scrollBox2 = ref}}/>
        <button onClick={()=>this.scrollBox2.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default ScrollBoxRoot2;
