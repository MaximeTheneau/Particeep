export const SAVE_MOVIES = "SAVE_MOVIES";

export function saveMovies(movies) {
  return {
    type: SAVE_MOVIES,
    movies: movies,
  };
}

export const FETCH_MOVIES = "FETCH_MOVIES";

export function fetchMovies() {
  return {
    type: FETCH_MOVIES,
  };
}

export const NEW_MOVIES_ACTION = "NEW_MOVIES_ACTION";

export function newMoviesActionAction(newMovies) {
  return {
    movies: newMovies,
    type: NEW_MOVIES_ACTION,
  };
}
