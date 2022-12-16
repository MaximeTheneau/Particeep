import { CHANGE_CATEGORY, DELETE_MOVIES, FETCH_MOVIES, saveMovies } from "../action/movies";
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
    case CHANGE_CATEGORY: {
      const { category, id } = action.movies;
      console.log(category, id);
      movies$.then(
        (movies) => {
          const newMovies = movies.map((movie) => {
            if (movie.id === id) {
              return {
                ...movie,
                category: category.includes(category) ? category : "",
              };
            }
            return movie;
          });
          store.dispatch(saveMovies(newMovies));
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
    case DELETE_MOVIES: {
      const { id } = action.movies;
      movies$.then(
        (movies) => {
          console.log(movies);
          const newMovies = movies.filter((movie) => movie.id !== id);
          store.dispatch(saveMovies(newMovies));
        });

      return next(action);
    }

    default:
      return next(action);
  }
};

export default moviesMiddleware;
