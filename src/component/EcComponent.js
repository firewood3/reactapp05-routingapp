import React, {Component} from 'react';

class EcComponent extends Component {

  state = {
    contents: '',
    fixedContents: 'Fixed Text'
  }

  onChangeHandler = (event) => {
    console.log(event.target.value)
    this.setState((prevState) => {
      return {
        contents: event.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.fixedContents}</h2>
        <input onChange={this.onChangeHandler}/>
        <p>{this.state.contents}</p>
      </div>
    );
  }
}

export default EcComponent;
