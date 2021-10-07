import React from "react";


class ButtonOne extends React.Component {
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
        <button onClick={ this.handleClick }>Button One</button>
        <p>Button One: {this.state.numberClicks}</p>
      </>

    );
  }
}
export default ButtonOne;
  
