import React from "react";

class Myname extends React.Component {
  render(){
    const { handleChange, value } = this.props;
   
    let error = undefined
    if (value.length > 20) error = 'Nome tem muitas letras!'

    return(
      <label>
            Name:
            <input type="text" name="myName" value={value} onChange={handleChange}/>
            <div>
              <p>{error ? error : ''}</p>
            </div>
    </label>
    );
  }
}
export default Myname;