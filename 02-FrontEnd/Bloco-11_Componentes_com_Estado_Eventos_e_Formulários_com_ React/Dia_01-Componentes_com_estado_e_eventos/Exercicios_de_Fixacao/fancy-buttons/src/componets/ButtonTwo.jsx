import React from "react";

class ButtonTwo extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)   
    this.state = {
      numberClicks: 0
    } 
  }
  handleClick() {
    this.setState((lastState, _props) => ({
      numberClicks: lastState.numberClicks + 1
    })) 
  }

  render() {
    return(
      <>
        <button onClick={ this.handleClick }>Button Two</button> 
        <p>Button Two: {this.state.numberClicks}</p>
      </>
    );
  }
}
export default ButtonTwo;
