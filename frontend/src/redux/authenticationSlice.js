import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    username: "",
    password: "",
    verifyPassword: "",
    userType: "student",
  },
  reducers: {
    setUsername: (state, { payload }) => {
      state.username = payload;
    },
    setPassword: (state, { payload }) => {
      state.password = payload;
      console.log(state.password);
    },
    setVerifyPassword: (state, { payload }) => {
      state.verifyPassword = payload;
    },
    setUserType: (state, { payload }) => {
      state.userType = payload;
    },
  },
});

//Action creators are generated for each case reducer function
export const { setUsername, setPassword, setVerifyPassword, setUserType } =
  authenticationSlice.actions;
export default authenticationSlice.reducer;
