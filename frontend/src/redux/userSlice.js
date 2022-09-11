import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    age: 0,
    zoomLink: "",
    userType: "tutor",
    tags: [],
    langauge: "",
    tagInput: "",
    gender: "",
    language: "",
    expertise: "",
    email: "",
    topicChoice: "",
    tutorList: [],
    selectedTutor: {},
    available: false,
    meetingActive: false,
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
      state.tagInput = "";
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
    setTopicChoice: (state, { payload }) => {
      state.topicChoice = payload;
    },
    setTutorList: (state, { payload }) => {
      state.tutorList = payload;
    },
    setSelectedTutor: (state, { payload }) => {
      state.selectedTutor = payload;
    },
    setAvailable: (state, { payload }) => {
      state.available = payload;
    },
    setMeetingActive: (state, { payload }) => {
      state.meetingActive = payload;
      console.log(state.meetingActive)
    },
    setUpdateTutor: (
      state,
      { zoomLink, tags, language, gender, email, expertise }
    ) => {
      state.zoomLink = zoomLink;
      state.tags = tags;
      state.langauge = language;
      state.gender = gender;
      state.email = email;
      state.expertise = expertise;
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
  setTopicChoice,
  setTutorList,
  setSelectedTutor,
  setAvailable,
  setUpdateTutor,
  setMeetingActive
} = userSlice.actions;
export default userSlice.reducer;
