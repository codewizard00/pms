// reducers/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toaster } from '../../utils/toastify/toaster';
import instance from '../../utils/axiosInstance';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    productStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    productSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    productFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { productStart, productSuccess, productFailure } = productSlice.actions;

export const productById = (id) => async (dispatch) => {
  dispatch(productStart());
  try {
    const response = await instance.get(`/product/${id}`)
    dispatch(productSuccess(response.data.data));
  } catch (error) {
    toaster.error(error.response.data.message);
  }
};

export default productSlice.reducer;
