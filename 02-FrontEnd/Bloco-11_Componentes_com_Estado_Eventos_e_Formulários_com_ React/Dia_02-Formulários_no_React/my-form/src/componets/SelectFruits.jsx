import React from "react";

class SelectFuits extends React.Component {
  render(){
    const { handleChange, value } = this.props;
    return(
      <label>
      Favorite Fruit: 
        <select name='myFruits' value={value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>      
    );
  }
}
export default SelectFuits;