import React from "react";
import Email from "./componets/Email";
import NameImput from "./componets/NameImput";


class Form extends  React.Component {
  constructor() {
    super();
    this.state = {
      nameImput: '',
      email:'',
    };
  }

handleChange = ({ target }) => {
  const {name, value } = target;

  this.setState({[name]: value });
}

  render() {
    const { nameImput, email } = this.state;

    return (
      <>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Name</label>
        </div>
      <div className="field-body">

        <NameImput value={ nameImput } handleChange={ this.handleChange } />
        
        <div className="field-label is-normal">
          <label className="label">Email</label>
        </div>

        <Email value={ email } handleChange={ this.handleChange }/>
      </div>
    </div>

    <div className="field is-horizontal">
      <div className="field-label"></div>
      <div className="field-body">
        <div className="field is-expanded">
          <div className="field has-addons">
            <p className="control">
              <a className="button is-static" href='a'>
                +55
              </a>
            </p>
            <p className="control is-expanded">
              <input className="input" type="tel" placeholder="Your phone number"></input>
            </p>
          </div>
          <p className="help">Do not enter the first zero</p>
        </div>
      </div>
    </div>

    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">Department</label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <div className="select is-fullwidth">
              <select>
                <option>Business development</option>
                <option>Marketing</option>
                <option>Sales</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="field is-horizontal">
      <div className="field-label">
        <label className="label">Already a member?</label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <label className="radio">
              <input type="radio" name="member"></input>
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="member"></input>
              No
            </label>
          </div>
        </div>
      </div>
    </div>

    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">Subject</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <input className="input is-danger" type="text" placeholder="e.g. Partnership opportunity"></input>
          </div>
          <p className="help is-danger">
            This field is required
          </p>
        </div>
      </div>
    </div>

    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">Question</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div className="field is-horizontal">
      <div className="field-label">
       
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <button className="button is-primary">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
    );
  }

}

export default Form;
