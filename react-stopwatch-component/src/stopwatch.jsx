import React from "react";
import ReactDOM from "react-dom";

class Stopwatch extends React.Component{
  constructor(props){
    super(props);
    this.state = { isTicking: false, time: 0, switchStartClass: "start", switchPauseClass: "pause hidden"};
    this.tick = this.tick.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  tick(){
    this.setState({ time: this.state.time + 1 })
  }


  handleSwitch() {
    if(this.state.isTicking === false){
      this.setState({isTicking: true, switchStartClass: "start hidden", switchPauseClass: "pause"})
      this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    }
    else{
      this.setState({isTicking: false, switchStartClass: "start", switchPauseClass: "pause hidden"})
      clearInterval(this.timerID);
    }
  }

  handleReset() {
    if(this.state.isTicking){
      return console.log("Must be paused before reset");
    }
    this.setState({ time: 0 })
  }

  render(){
    return(
    <div className="container">
    <div className="outer" onClick={this.handleReset}>
      <div className="time">{ this.state.time }</div>
    </div>
    <div className={this.state.switchStartClass} onClick={this.handleSwitch}><i className="fas fa-play"></i></div>
    <div className={this.state.switchPauseClass} onClick={this.handleSwitch}><i className="fas fa-pause"></i></div>
  </div>
    )
  };
}

export default Stopwatch;
