import { FETCH_MOVIES, saveMovies } from "../action/movies";
import { movies$ } from "../data/movies";

const moviesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MOVIES: {
      movies$.then(
        (movies) => {
          store.dispatch(saveMovies(movies));
        },
      ).catch(
        (error) => {
          console.log(error);
        },
      ).finally(
        () => {
          // console.log("finally");
        },
      );
      return next(action);
    }

    default:
      return next(action);
  }
};

export default moviesMiddleware;
