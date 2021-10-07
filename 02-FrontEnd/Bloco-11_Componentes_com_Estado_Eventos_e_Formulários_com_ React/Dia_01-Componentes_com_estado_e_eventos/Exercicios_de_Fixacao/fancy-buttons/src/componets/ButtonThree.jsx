import React from "react";

class ButtonThree extends React.Component {
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
        <button onClick={ this.handleClick }>Button Three</button> 
        <p>Button Three: {this.state.numberClicks}</p>
      </>
    );
  }
}
export default ButtonThree;

  
