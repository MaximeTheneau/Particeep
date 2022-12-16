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

export function newMoviesAction(newMovies) {
  return {
    movies: newMovies,
    type: NEW_MOVIES_ACTION,
  };
}

export const DELETE_MOVIES = "DELETE_MOVIES";

export function deleteMovies(index) {
  return {
    type: DELETE_MOVIES,
    movies: index,
  };
}

export const CHANGE_CATEGORY = "CHANGE_CATEGORY";

export function changeCategory(category, id) {
  return {
    type: CHANGE_CATEGORY,
    movie: {
      category: category,
      id: id,
    },
  };
}
