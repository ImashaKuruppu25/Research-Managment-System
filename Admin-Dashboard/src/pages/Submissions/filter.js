import { pokemons } from "../../dummy";

export function getPokemon() {
  const pokemonList = pokemons;
  return pokemonList;
}

export function filterPokemon(pokeType) {
  let filtredPokemon = getPokemon().filter((type) => type.tipo === pokeType);
  return filtredPokemon;
}
