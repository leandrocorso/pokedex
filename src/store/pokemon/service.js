import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

class PokemonService {
  // Fetch list
  static async fetchPokemonList() {
    return axios.get(`${BASE_URL}/pokemon`);
  }

  // Fetch pokemon
  static async fetchPokemon(name) {
    return axios.get(`${BASE_URL}/pokemon/${name}`);
  }
}

export default PokemonService;
