// reducers/registerSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toaster } from '../../utils/toastify/toaster';

export const registerSlice = createSlice({
  name: 'login',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    resgiterStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { resgiterStart, registerSuccess, registerFailure, logout } = registerSlice.actions;

export const register = (data,navigate) => async (dispatch) => {
  dispatch(resgiterStart());
  try {

    const response = await axios.post('http://209.182.232.219:3001/register', data)
    toaster.success(response.data.message);
    dispatch(registerSuccess(response.data));
    window.location.href = "/signin";
  } catch (error) {
    toaster.error(error.response.data.message);
    dispatch(registerFailure(error.response.data.message));
  }
};

export default registerSlice.reducer;
