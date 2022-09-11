//store.js
import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    auth: authenticationReducer,
    user: userReducer,
  },
});
