import React from "react";
import ReactDOM from "react-dom";

class ValidatedInput extends React.Component{
  constructor(props){
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({ password: e.target.value })
  }

  render(){
    let status = '';
    if(!this.state.password){
      status = "A password is required.";
    }
    else if(this.state.password.length < 8){
      status = "Your password is too short."
    }
    else{
      status = "Good."
    }

    return(
      <div className="form-container">
        <form>
        <label htmlFor="password">Password</label><br/>
        <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
      </form>
      <i className={status==="Good." ? "fas fa-check green" : "fas fa-times red"}></i>
      <h2 className={status==="Good." ? "text green" : "text red"}>{status}</h2>
      </div>
    )
  }
}

export default ValidatedInput;
