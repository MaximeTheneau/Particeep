import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../reducers/header";

const store = configureStore({
  reducer: {
    header: headerReducer,
  },

});

export default store;
setupListeners(store.dispatch);
