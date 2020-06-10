import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

class PokemonService {
  // Fetch list
  static fetchPokemonList() {
    return axios.get(`${BASE_URL}/pokemon`);
  }

  // Fetch details
  static fetchPokemonDetais(id) {
    return axios.get(`${BASE_URL}/pokemon/${id}`);
  }
}

export default PokemonService;
