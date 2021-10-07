import React from "react";

function handleClick() {
  console.log('Button Three');
}

class ButtonThree extends React.Component {
  render() {
    return(
      <button onClick={ handleClick }>Button Three</button> 
    );
  }
}
export default ButtonThree;

  
