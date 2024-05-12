// reducers/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toaster } from '../../utils/toastify/toaster';
import instance from '../../utils/axiosInstance';

export const createProductSlice = createSlice({
  name: 'createProduct',
  initialState: {
    status: null,
    loading: false,
    error: null,
  },
  reducers: {
    createProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createProductSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    createProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { createProductStart, createProductSuccess, createProductFailure } = createProductSlice.actions;

export const createProduct = (data) => async (dispatch) => {
  dispatch(createProductStart());
  try {
    const response = await instance.post('/product', data)
    dispatch(createProductSuccess(response.data.message));
    toaster.success(response.data.message);
  } catch (error) {
    dispatch(createProductFailure(error.response.data.message));
    toaster.error(error.response.data.message);
  }
};

export default createProductSlice.reducer;
