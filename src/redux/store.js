import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import searchReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    numbers: contactsReducer,
    search: searchReducer,
  },
});
