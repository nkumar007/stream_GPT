import { createSlice } from "@reduxjs/toolkit";

const movieSclie = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerKey: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerKey: (state, action) => {
      state.trailerKey = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerKey } = movieSclie.actions;

export default movieSclie.reducer;
