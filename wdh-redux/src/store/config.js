import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slice/config-slice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});
