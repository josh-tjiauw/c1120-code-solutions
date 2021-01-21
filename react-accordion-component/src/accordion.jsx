import React from "react";
import ReactDOM from "react-dom";

class Accordion extends React.Component{
  constructor(props){
    super(props);
    this.state = {id: null}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let langId = e.target.id;
    this.setState({id: langId})
    if(langId === this.state.id){
      this.setState({id: null});
    }
  }

  render(){
    console.log(this.state);
    return(
      <div className="topic-container">{ this.props.topics.map(language => <ul>
        <h1 className="header" id={language.id} onClick={this.handleClick}>{language.title}</h1>
        <p id={language.id} className={parseInt(this.state.id) === language.id ? "paragraph" : "hidden"}>{language.description}</p>
        </ul> ) }
      </div>
    )
  }
}

export default Accordion;
