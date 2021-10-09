import React from "react";

class Email extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <>
        <div className="field">
          <p className="control is-expanded has-icons-left has-icons-right">
            <input className="input is-success" type="email" placeholder="Email" name='email' onChange={handleChange} value={value}></input>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
      </>
    );
  }

}
export default Email; 
