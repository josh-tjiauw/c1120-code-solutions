import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component{
  constructor(props){
    super(props);
    this.state = { clickCounter: 0, btnClassName: this.getClass }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    this.setState({ clickCounter: this.state.clickCounter + 1 })
    console.log(this.state.clickCounter)
  }

  getClass() {
    let classes = "btn-default"
    if(this.state.clickCounter >= 3 && this.state.clickCounter < 6){
      classes="btn-purple";
    }
    else if(this.state.clickCounter >= 6 && this.state.clickCounter < 9)
    {
      classes="btn-lavender";
    }
    else if(this.state.clickCounter >= 9 && this.state.clickCounter < 12)
    {
      classes="btn-red";
    }
    else if(this.state.clickCounter >= 12 && this.state.clickCounter < 15)
    {
      classes="btn-orange";
    }
    else if(this.state.clickCounter >= 15 && this.state.clickCounter < 18)
    {
      classes="btn-yellow";
    }
    else if(this.state.clickCounter >= 18)
    {
      classes="btn-white";
    }
    return classes;
  }

  render(){
    return (
    <div>
      <button onClick={this.clickHandler} className={this.getClass()}>Hot Button</button>
      <button className="btn-red">Counter: {this.state.clickCounter}</button>
    </div>
    );
  }
}

export default HotButton;
