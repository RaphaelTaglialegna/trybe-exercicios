import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      Myideas:'',
      value: 'Coconut',   
      name:'',
      lastname:'',
    };
  }
  handleName = (event) =>{
    this.setState({
      name: event.target.value,
    });
  }
  handleLastName = (event) =>{
    this.setState({
      lastname: event.target.value,
    });
  }
  
  handleTextArea = (event) =>{
    this.setState({
      Myideas: event.target.value,
    });
  }
  handleChange = (event) =>{
    this.setState({
      value: event.target.value,
    });
  }
  render() {
    return (
      <form>
        <div>
        <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleName}/>
          </label>
          <label>
             Last Name:
            <input type="text" name="lastName"value={this.state.lastname} onChange={this.handleLastName} />
          </label>
        </div>
        <div>
          <label>
          Favorite Fruit: 
            <select valeu={this.state.valeu} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>        
        </div>
        <div>
          <textarea name="Myideas" value={this.state.Myideas} onChange={this.handleTextArea}/>
        </div>
       <input type="submit" value="Submit" />

      </form>
    )  
  }
}
export default Form;
