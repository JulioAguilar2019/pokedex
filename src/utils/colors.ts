import { colors } from '../constants';
import { types } from '../models/pokemon';

export const getColor = (types: types[]): string => {
  return colors[types[0]];
};

export const getIdWithThreeNumbers = (id: string): string => {
  const number = parseInt(id, 10);
  if (number < 10) {
    id = '00' + id;
  } else if (number < 100) {
    id = '0' + id;
  }
  return id;
};

export const getImageUrl = (id: string): string => {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getIdWithThreeNumbers(
    id
  )}.png`;
};
