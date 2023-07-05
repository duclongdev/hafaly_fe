import { configureStore } from '@reduxjs/toolkit'
import modalReducer from  "./reducers/modalSlice"
import imageReducer from "./reducers/UserAvatar"
const store = configureStore({
  reducer: {
    modal: modalReducer,
    image: imageReducer,
  },
});

export default store;