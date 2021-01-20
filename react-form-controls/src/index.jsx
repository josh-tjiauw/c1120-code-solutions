import React from "react";
import ReactDOM from "react-dom";

class NewsletterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({ value: e.target.value })
  }

  handleSubmit(e){
    console.log(this.state)
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

ReactDOM.render(<NewsletterForm />, document.getElementById('root'))
