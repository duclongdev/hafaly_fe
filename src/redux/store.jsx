import { configureStore,createSlice } from '@reduxjs/toolkit'
import eventsReducer from './reducers/eventsReducer'

const initialState = {
  avatar: []
};
const imageSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    addImage(state, action) {
      state.avatar.push(action.payload);
    }
  }
});

export default configureStore({
  reducer: {
    avatar: imageSlice.reducer
  }
})