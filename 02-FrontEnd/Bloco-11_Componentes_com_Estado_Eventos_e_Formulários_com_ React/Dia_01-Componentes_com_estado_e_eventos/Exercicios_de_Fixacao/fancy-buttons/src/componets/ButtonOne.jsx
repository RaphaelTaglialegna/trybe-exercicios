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

  classPar(num) {
    return num % 2 === 0 ? 'green' : 'white';
       
    }    

  render() {
    return(
      <>
        <button  onClick={ this.handleClick } style={{ background: this.classPar(this.state.numberClicks) }}>Button One</button>
        <p>Button One: {this.state.numberClicks}</p>
      </>

    );
  }
}
export default ButtonOne;
  
