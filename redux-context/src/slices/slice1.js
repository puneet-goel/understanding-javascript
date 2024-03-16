import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    updateCounter: (state, action) => {
      return state + 1
    }
  }
})

// this is for dispatch
export const { updateCounter } = counterSlice.actions;

// this is for configureStore
export default counterSlice.reducer;