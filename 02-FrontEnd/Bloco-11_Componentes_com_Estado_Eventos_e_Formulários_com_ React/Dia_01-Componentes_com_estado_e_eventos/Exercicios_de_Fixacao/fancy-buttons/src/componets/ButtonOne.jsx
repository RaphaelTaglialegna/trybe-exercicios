import React from "react";


class ButtonOne extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)    
  }

  handleClick() {
    console.log('Button One');
  }
  render() {
    return(
<button onClick={ this.handleClick }>Button One</button>
    );
  }
}
export default ButtonOne;
  
