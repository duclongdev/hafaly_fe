import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../menuSlice";
import addTaskReducer from "../addTask";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    addTask: addTaskReducer,
  },
});
