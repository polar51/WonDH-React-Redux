import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { name: 'Guest', id: 'Please Enter your Id' };

export const profileSilce = createSlice({
  name: 'profile',
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      const user = state;
      user.value = action.payload;
    },
    logout: state => {
      const user = state;
      user.value = initialStateValue;
    },
  },
});

export const { login, logout } = profileSilce.actions;

export default profileSilce.reducer;
