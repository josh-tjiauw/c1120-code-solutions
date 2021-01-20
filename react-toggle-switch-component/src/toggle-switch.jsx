import React from "react";
import ReactDOM from "react-dom";

class ToggleSwitch extends React.Component{
  constructor(props){
    super(props);
    this.state = { isOn: true }
    this.handleClick = this.handleClick.bind(this);
    this.getClassBackground = this.getClassBackground.bind(this);
    this.getClassBtn = this.getClassBtn.bind(this);
  }

  handleClick(){
    if(this.state.isOn){
      this.setState( { isOn: false } );
    }
    else this.setState( { isOn: true } );
  }

  getClassBackground() {
    let classVal = "bg-green";
    if(this.state.isOn){
      classVal = "bg-green"
    }
    else {
      classVal = "bg-gray"
    }
    return classVal;
  }

  getClassBtn() {
    let classVal = "btn-on";
    if(this.state.isOn){
      classVal = "btn-on"
    }
    else {
      classVal = "btn-off"
    }
    return classVal;
  }

  render(){
    return(
      <React.Fragment>
        <div onClick={this.handleClick} className={this.getClassBackground()}>
          <div onClick={this.handleClick} className={this.getClassBtn()}></div>
        </div>
        <span className="text">{ this.state.isOn ? "ON" : "OFF" }</span>
      </React.Fragment>
    )
  }
}

export default ToggleSwitch;
