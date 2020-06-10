import { takeEvery, put, call } from 'redux-saga/effects';

import { HTTP_ERROR } from 'utils/constants';
import PokemonService from './service';
import { FETCH_POKEMON_LIST, FETCH_POKEMON_DETAILS } from './actionTypes';

// Fetch list
function* fetchPokemonList() {
  try {
    const { status, data } = yield call(PokemonService.fetchPokemonList());
    if (status === 200) {
      yield put({ type: FETCH_POKEMON_LIST.SUCCESS, data });
    } else {
      yield put({ type: FETCH_POKEMON_LIST.FAILURE, error: HTTP_ERROR[status] });
    }
  } catch (e) {
    yield put({ type: FETCH_POKEMON_LIST.FAILURE, error: HTTP_ERROR[e.status] });
  }
}

// Fetch details
function* fetchPokemonDetails({ id }) {
  try {
    const { status, data } = yield call(PokemonService.fetchPokemonDetails(id));
    if (status === 200) {
      yield put({ type: FETCH_POKEMON_DETAILS.SUCCESS, data });
    } else {
      yield put({ type: FETCH_POKEMON_DETAILS.FAILURE, error: HTTP_ERROR[status] });
    }
  } catch (e) {
    yield put({ type: FETCH_POKEMON_DETAILS.FAILURE, error: HTTP_ERROR[e.status] });
  }
}

export default [
  takeEvery(FETCH_POKEMON_LIST.REQUEST, fetchPokemonList),
  takeEvery(FETCH_POKEMON_DETAILS.REQUEST, fetchPokemonDetails),
];
