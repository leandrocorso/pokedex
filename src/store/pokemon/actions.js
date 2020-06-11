import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_DETAILS,
} from './actionTypes';

export function getAll() {
  return {
    type: FETCH_POKEMON_LIST.REQUEST,
  };
}

export function getDetails(id) {
  return {
    type: FETCH_POKEMON_DETAILS.REQUEST,
    id,
  };
}
