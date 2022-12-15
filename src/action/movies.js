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
