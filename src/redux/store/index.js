import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const store = configureStore({
  reducer: {
    favourites: mainReducer,
  },
});

export default store;
