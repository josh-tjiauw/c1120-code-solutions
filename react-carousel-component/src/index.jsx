import React, { Component } from "react";
import ReactDOM from "react-dom";
import Carousel from "./carousel";

const pokemon = [
  {id: 1, name: "Bulbasaur", img: "../src/bulbasaur.png"},
  {id: 2, name: "Charmander", img: "../src/charmander.png"},
  {id: 3, name: "Jigglypuff", img: "../src/jigglypuff.png"},
  {id: 4, name: "Pikachu", img: "../src/pikachu.png"},
  {id: 5, name: "Squirtle", img: "../src/squirtle.png"}
];

ReactDOM.render(<Carousel pokemon={pokemon} />, document.getElementById('root'));
