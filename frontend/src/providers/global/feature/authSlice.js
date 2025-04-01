import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { token } = action.payload;
      state.token = token;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('authState');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
