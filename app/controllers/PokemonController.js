import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";

export class PokemonController {
  constructor() {
    console.log('hello from the pokemon controller');
  }

  async getPokemon() {
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }
}