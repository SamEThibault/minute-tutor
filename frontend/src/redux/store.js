//store.js
import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";

export default configureStore({
  reducer: {
    auth: authenticationReducer,
  },
});
