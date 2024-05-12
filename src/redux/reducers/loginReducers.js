// reducers/loginSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toaster } from '../../utils/toastify/toaster';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = loginSlice.actions;

export const login = (credentials,navigate) => async (dispatch) => {
  dispatch(loginStart());
  try {

    const response = await axios.post('http://209.182.232.219:3001/login', credentials)
    localStorage.setItem('token', response.data.data.token);
    toaster.success(response.data.message);
    dispatch(loginSuccess(response.data));
    window.location.href = "/";
  } catch (error) {
    toaster.error(error.response.data.message);
    dispatch(loginFailure(error.response.data.message));
  }
};

export default loginSlice.reducer;
