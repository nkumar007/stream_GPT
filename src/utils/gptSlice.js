import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearchView",
  initialState: {
    isSearchVisible: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    showGptSearch: (state, action) => {
      state.isSearchVisible = !state.isSearchVisible;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearGptMovieResult: (state, action) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const { showGptSearch, addGptMovieResult, clearGptMovieResult } =
  gptSlice.actions;

export default gptSlice.reducer;
