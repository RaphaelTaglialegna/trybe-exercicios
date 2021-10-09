import React from "react";

class NameImput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
      return(
      <>
        <div className="field">
          <p className="control  is-expanded has-icons-left">
            <input className="input nameImput" type="text" placeholder="Name" name='nameImput' onChange={handleChange} value={value}></input>
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </p>
        </div>
        </> 
    );
  }

}
export default NameImput; 
