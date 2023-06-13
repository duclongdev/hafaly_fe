

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imagePath: '', 
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImagePath: (state, action) => {
      state.imagePath = action.payload;
    },
  },
});

export const { setImagePath } = imageSlice.actions;

export default imageSlice.reducer;