import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../reducers/header";
import moviesReducer from "../reducers/movies";
import moviesMiddleware from "../middlewares/moviesMiddleware";

const store = configureStore({
  reducer: {
    header: headerReducer,
    movies: moviesReducer,
  },
  middleware: [moviesMiddleware],
});

export default store;
setupListeners(store.dispatch);
