import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/auth/AuthSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
