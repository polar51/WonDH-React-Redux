import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: {},
};

export const profileSilce = createSlice({
  name: 'profile',
  initialState,
});
