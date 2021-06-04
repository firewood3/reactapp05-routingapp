import React, {Component} from 'react';

class ScrollBox extends Component {
  style = {
    border: '1px solid black',
    height: '300px',
    width: '300px',
    overflow: 'auto',
    position: 'relative'
  };

  innerStyle = {
    width: '100%',
    height: '650px',
    background: 'linear-gradient(white, black)'
  };

  scrollToBottom = () => {
    const {scrollHeight, clientHeight} = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    return (
      <>
        <div
          style={this.style}
          ref={(ref)=>{this.box=ref}}
        >
          <div style={this.innerStyle}/>
        </div>
        {/*<button onClick={this.scrollToBottom}>맨밑으로</button>*/}
      </>
    );
  }
}

export default ScrollBox;
