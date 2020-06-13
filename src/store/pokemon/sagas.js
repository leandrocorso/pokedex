import {
  takeEvery, put, call, all,
} from 'redux-saga/effects';

import { HTTP_ERROR } from 'utils/constants';
import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_DETAILS,
} from './actionTypes';
import PokemonService from './service';

// Fetch list
function* fetchPokemonList() {
  try {
    const { data: { results }, status } = yield call(PokemonService.fetchPokemonList);
    if (status === 200) {
      const allResults = yield all(results.map(({ name }) => call(PokemonService.fetchPokemon, name)));
      const allData = allResults.map(({
        data: {
          id, name, types, abilities, stats,
        },
      }) => ({
        id, name, types, abilities, stats,
      }));
      yield put({ type: FETCH_POKEMON_LIST.SUCCESS, data: allData });
    } else {
      yield put({ type: FETCH_POKEMON_LIST.FAILURE, error: HTTP_ERROR[status] });
    }
  } catch (e) {
    yield put({ type: FETCH_POKEMON_LIST.FAILURE, error: HTTP_ERROR[e.status] });
  }
}

// Fetch details
function* fetchPokemonDetails({ id }) {
  console.log('id', id);
  try {
    const { status, data } = yield call(PokemonService.fetchPokemon, id);
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
