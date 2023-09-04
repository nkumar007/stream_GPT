import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearchView",
  initialState: {
    isSearchVisible: false,
    movieNames: null,
  },
  reducers: {
    showGptSearch: (state, action) => {
      state.isSearchVisible = !state.isSearchVisible;
    },
    addGptSearchResults: (state, action) => {
      state.movieNames = action.payload;
    },
  },
});

export const { showGptSearch, addGptSearchResults } = gptSlice.actions;

export default gptSlice.reducer;
