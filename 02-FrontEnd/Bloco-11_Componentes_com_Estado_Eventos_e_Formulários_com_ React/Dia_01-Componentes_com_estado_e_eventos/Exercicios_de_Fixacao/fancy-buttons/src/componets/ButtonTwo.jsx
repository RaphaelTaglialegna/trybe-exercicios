import React from "react";

class ButtonTwo extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)    
  }
  handleClick() {
    console.log('Button Two');
  }
  render() {
    return(
      <button onClick={ this.handleClick }>Button Two</button> 
    );
  }
}
export default ButtonTwo;
