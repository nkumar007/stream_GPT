import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearchView",
  initialState: {
    isSearchVisible: false,
  },
  reducers: {
    showGptSearch: (state, action) => {
      state.isSearchVisible = !state.isSearchVisible;
    },
  },
});

export const { showGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
