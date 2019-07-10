"use strict";

import { Pokemon } from "./05-pokemon";

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon("Oddish", "leaf", "water");

// Which pokemon should Ash use?

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon("Balbasaur", "leaf", "water"),
    new Pokemon("Pikatchu", "electric", "water"),
    new Pokemon("Charizard", "fire", "leaf"),
    new Pokemon("Balbasaur", "water", "fire"),
    new Pokemon("Kingler", "water", "fire")
  ];
}

class pokeBall {
  pokemons: Pokemon[];

  constructor(pokemons: Pokemon[]) {
    this.pokemons = pokemons;
  }

  pokemonChecker(pokemon: Pokemon): Pokemon {
    let x: Pokemon[] = this.pokemons;
    for (let i = 0; i < x.length; i++) {
      if (x[i].isEffectiveAgainst(pokemon)) {
        return x[i];
      }
    }
  }
}

let allPokemons = new pokeBall(pokemonOfAsh);
let chosenPokemon: Pokemon = allPokemons.pokemonChecker(wildPokemon);

console.log(`I choose you, ${chosenPokemon.name}!`);
