import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {

  },
  reducers: {

  },
});

//Action creators are generated for each case reducer function
export const { setUsername, setPassword, setVerifyPassword, setUserType } =
  userSlice.actions;
export default userSlice.reducer;
