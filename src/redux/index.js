import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';
import metricsSlice, { setOnline } from './metrics';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (user) => {
      return user;
    }
  }
});

const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
    metrics: metricsSlice.reducer,
  })
});

export default store;

const { dispatch } = store;

window.addEventListener('offline', () => dispatch(setOnline(false)));

window.addEventListener('online', () => dispatch(setOnline(true)));
