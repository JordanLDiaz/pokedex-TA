import { pokeApi } from "./AxiosService.js";

class PokemonService {
  async getPokemon() {
    const res = await pokeApi('')
  }

}

export const pokemonService = new PokemonService();