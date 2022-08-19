import axios from 'axios';

const PokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

const LIMIT = 20;

export default class PokeApiService {
  static getPage(pageIndex: number) {
    return axios.get('https://www.pokemon.com/us/api/pokedex');
  }
  static getPokemon(id: string) {
    return PokeApi.get(`pokemon/${id}`);
  }

  static getPokemonByUrl(url: string) {
    return axios.get(url).then((response) => response.data);
  }
}
