import React from "react";
import SelectFuits from "./componets/SelectFruits";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      Myideas:'',
      myFruits: 'Coconut',   
      myName:'',
      myLastName:'',
      isGoing: false,
    };
  }
  // Primeira maneira criada de checar os valores no React.
  // handleName = (event) =>{
  //   this.setState({
  //     name: event.target.value,
  //   });
  // }
  // handleLastName = (event) =>{
  //   this.setState({
  //     lastname: event.target.value,
  //   });
  // }
  
  // handleTextArea = (event) =>{
  //   this.setState({
  //     Myideas: event.target.value,
  //   });
  // }

  // Fazendo agora todas mudanças de valores em apenas uma função handle.

  handleChange = ({ target }) =>{
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
        });
  }
  render() {
    return (
      <form>
        <fieldset>
        <label>
            Name:
            <input type="text" name="myName" value={this.state.myName} onChange={this.handleChange}/>
          </label>
          <label>
             Last Name:
            <input type="text" name="myLastName" value={this.state.myLastName} onChange={this.handleChange} />
          </label>
        </fieldset>
        <fieldset>
           <SelectFuits value={this.state.myFruits} handleChange={this.handleChange} />
        </fieldset>
        <fieldset>
          <textarea name="Myideas" value={this.state.Myideas} onChange={this.handleChange}/>
        </fieldset>
        <fieldset>
        <label>
          Estão indo:
        <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange} />
        </label>
        </fieldset>
        <fieldset><input type="file" /></fieldset>
       <input type="submit" value="Submit" />
      </form>
    )  
  }
}
export default Form;
