import { combineReducers } from 'redux';

import pokemonReducer from './pokemon/reducer';

const rootReducers = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducers;
