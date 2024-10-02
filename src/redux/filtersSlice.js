import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    setContactFilter(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setContactFilter } = slice.actions;

export default slice.reducer;
