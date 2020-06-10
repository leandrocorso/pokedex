import { FETCH_POKEMON_LIST, FETCH_POKEMON_DETAILS } from './actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  list: [],
  details: {},
  error: '',
};

export default function pokemonReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // List
    case FETCH_POKEMON_LIST.REQUEST:
      return {
        ...state,
        isLoading: true,
        details: {},
        error: '',
      };

    case FETCH_POKEMON_LIST.SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.data,
        details: {},
        error: '',
      };

    case FETCH_POKEMON_LIST.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    // Details
    case FETCH_POKEMON_DETAILS.REQUEST:
      return {
        ...state,
        isLoading: true,
        details: {},
        error: '',
      };

    case FETCH_POKEMON_DETAILS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        details: action.data,
        error: '',
      };

    case FETCH_POKEMON_DETAILS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default: return state;
  }
}
