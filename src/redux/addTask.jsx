import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
};

export const addTaskSlice = createSlice({
  name: "addTask",
  initialState,
  reducers: {
    openAddTaskModal: (state) => {
      state.open = true;
    },
    closeAddTaskModal: (state) => {
      state.open = false;
    },
  },
});

export const { openAddTaskModal, closeAddTaskModal } = addTaskSlice.actions;
export const selectAddTaskModal = (state) => state.addTask.open;
export default addTaskSlice.reducer;
