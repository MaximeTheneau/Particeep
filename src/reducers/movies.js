import {
  CHANGE_CATEGORY, DELETE_MOVIES, NEW_MOVIES_ACTION, SAVE_MOVIES,
} from "../action/movies";

export const initialState = {
  movies: [
    {
      id: "",
      title: "",
      category: "",
      likes: 0,
      dislikes: 0,
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case NEW_MOVIES_ACTION:
      return {
        ...state,
        movies: action.movies,
      };
    case DELETE_MOVIES:
      return {
        movies: state.movies,
      };
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.movie.id) {
            return {
              ...movie,
              category: action.movie.category,
            };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
