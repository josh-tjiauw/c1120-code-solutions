import React, { Component } from "react";
import ReactDOM from "react-dom";

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0 };
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleBottomBtnClick = this.handleBottomBtnClick.bind(this);
  }

  handleClickPrev(){
    if(this.state.counter <= 0){
      this.setState({ counter: 4})
    }
    else{
    this.setState({ counter: this.state.counter - 1})
    }
  }

  handleClickNext(){
    if(this.state.counter >= 4){
      this.setState({ counter: 0})
    }
    else{
    this.setState({ counter: this.state.counter + 1})
    }
  }

  handleBottomBtnClick(e){
    this.setState({ counter: parseInt(e.target.id) })
  }

  render(){
    let pokemon = document.querySelectorAll('.pokemon')
    pokemon.forEach(poke => {
      if(parseInt(poke.id) === this.state.counter){
        poke.className = 'selected pokemon'
      }
      else{
        poke.className = 'unselected pokemon'
      }
    })

    return(
      <div className="container">
        <i class="fas fa-chevron-left" onClick={this.handleClickPrev}></i>
        <i class="fas fa-chevron-right" onClick={this.handleClickNext}></i>
        <img src={this.props.pokemon[this.state.counter].img} alt="asdf"></img>
        <div class="directory">
          <div id="0" class="selected pokemon" onClick={this.handleBottomBtnClick}></div>
          <div id="1" class="unselected pokemon" onClick={this.handleBottomBtnClick}></div>
          <div id="2" class="unselected pokemon" onClick={this.handleBottomBtnClick}></div>
          <div id="3" class="unselected pokemon" onClick={this.handleBottomBtnClick}></div>
          <div id="4" class="unselected pokemon" onClick={this.handleBottomBtnClick}></div>
        </div>
      </div>
    )
  }
};

export default Carousel;
