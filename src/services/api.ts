import type { AllPokemons, PokemonSchema } from "../types/api";


//Feetch a todos los pokemons
export const getAllPokemons = async (quantity : number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}&offset=0`);

  const {results} = await res.json() as AllPokemons;

  return results
}


export const getPokemon = async (name : string) => {
  const res =  await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const data = await res.json() as PokemonSchema;

  return data;
}