import axios from "axios";
import { PokemonData } from "../components";

export default class PokemonService{
    static async get(): Promise<Array<PokemonData>>{
        return axios
        .get('https://www.pokemon.com/us/api/pokedex')
        .then(response => response.data);
    }
}