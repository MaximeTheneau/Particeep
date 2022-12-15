import { SAVE_MOVIES } from "../action/movies";

export const initialState = {
  movies: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
};

export default reducer;
