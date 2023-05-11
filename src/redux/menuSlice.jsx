import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
  peeking: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      if (state.open) state.peeking = false;
      state.open = !state.open;
    },
    handlePeeking: (state, action) => {
      const { mouseX, isCursorOverMenu } = action.payload;
      if (state.open === false) {
        if (mouseX < 10 || isCursorOverMenu) {
          state.peeking = true;
        } else {
          state.peeking = false;
        }
      } else {
        state.peeking = false;
      }
    },
  },
});

export const { toggleMenu, handlePeeking } = menuSlice.actions;
export const selectMenuState = (state) => state.menu.open;
export const selectMenuPeekingState = (state) => state.menu.peeking;
export default menuSlice.reducer;
