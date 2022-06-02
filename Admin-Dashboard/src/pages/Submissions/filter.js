// --------------This is for static data testing, This doesn't work any longer---------

import { pokemons } from "../../dummy";

export function getPokemon() {
  const pokemonList = pokemons;
  return pokemonList;
}

export function filterPokemon(pokeType) {
  let filtredPokemon = getPokemon().filter((type) => type.type === pokeType);
  return filtredPokemon;
}
