import React from "react";
import ReactDOM from "react-dom";

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const pokemon = pokedex.map((pokemon) => <li>{ pokemon.name }</li> );
const ulPokemon = <ul>{ pokemon }</ul>

ReactDOM.render(ulPokemon, document.getElementById('root'))
