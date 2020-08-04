import { createSlice } from '@reduxjs/toolkit';

const metricsSlice = createSlice({
  name: 'metrics',
  initialState: {
    online: window.navigator.onLine,
  },
  reducers: {
    setOnline: (state, { payload }) => {
      state.online = payload;
      return state;
    }
  }
});

export const { setOnline } = metricsSlice.actions;

export default metricsSlice;
