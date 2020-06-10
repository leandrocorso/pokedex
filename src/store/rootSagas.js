import { all } from 'redux-saga/effects';

import pokemonSaga from 'store/pokemon/sagas';

export default function* rootSagas() {
  yield all([
    ...pokemonSaga,
  ]);
}
