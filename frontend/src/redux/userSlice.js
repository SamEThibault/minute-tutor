import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    age:0,
    zoomLink: "",
    userType: "student",
    tags: [],
    langauge:"",
    tagInput: "",
    gender: "",
    language: "",
    expertise: "",
    email: "",
  },
  reducers: {
    setZoomLink: (state, { payload }) => {
      state.zoomLink = payload;
    },
    setUserType: (state, { payload }) => {
      state.userType = payload;
    },
    setTags: (state, { payload }) => {
      state.tags = [...state.tags, payload];
    },
    setTagInput: (state, { payload }) => {
      state.tagInput = payload;
    },
    setGender: (state, { payload }) => {
      state.gender = payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
    setExpertise: (state, { payload }) => {
      state.expertise = payload;
    },
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
});

//Action creators are generated for each case reducer function
export const {
  setZoomLink,
  setUserType,
  setTags,
  setTagInput,
  setGender,
  setLanguage,
  setExpertise,
  setEmail,
} = userSlice.actions;
export default userSlice.reducer;
