import {
  takeEvery, put, call, all,
} from 'redux-saga/effects';

import { HTTP_ERROR } from 'utils/constants';
import {
  FETCH_POKEMON,
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_DETAILS,
} from './actionTypes';
import PokemonService from './service';

// Fetch pokemon
function* fetchPokemon({ data }) {
  console.log('SSSSSS', data);
  const x = yield all(data.map(({ name }) => call(PokemonService.fetchPokemon, name)));
  console.log(x);
  try {
    // if (status === 200) {
    // yield put({ type: FETCH_POKEMON_LIST.SUCCESS, data: results });
    // } else {
    //  yield put({ type: FETCH_POKEMON_LIST.FAILURE, error: HTTP_ERROR[status] });
    // }
  } catch (e) {
    yield put({ type: FETCH_POKEMON.FAILURE, error: HTTP_ERROR[e.status] });
  }
}

// Fetch list
function* fetchPokemonList() {
  try {
    const { data: { results }, status } = yield call(PokemonService.fetchPokemonList);
    if (status === 200) {
      const allResults = yield all(results.map(({ name }) => call(PokemonService.fetchPokemon, name)));
      const allData = allResults.map(({ data: { id, name, types } }) => ({ id, name, types }));
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
  try {
    const { status, data } = yield call(PokemonService.fetchPokemonDetails, id);
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
  takeEvery(FETCH_POKEMON.REQUEST, fetchPokemon),
  takeEvery(FETCH_POKEMON_LIST.REQUEST, fetchPokemonList),
  takeEvery(FETCH_POKEMON_DETAILS.REQUEST, fetchPokemonDetails),
];
