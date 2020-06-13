import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_DETAILS,
  SET_POKEMON_DETAILS,
  SET_SECTION,
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

export function setDetails(data) {
  return {
    type: SET_POKEMON_DETAILS,
    data,
  };
}

export function setSection(data) {
  return {
    type: SET_SECTION,
    data,
  };
}
