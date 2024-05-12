// reducers/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toaster } from '../../utils/toastify/toaster';
import instance from '../../utils/axiosInstance';

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    list: null,
    loading: false,
    error: null,
  },
  reducers: {
    productListStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    productListSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    productListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { productListStart, productListSuccess, productListFailure } = productListSlice.actions;

export const productList = () => async (dispatch) => {
  dispatch(productListStart());
  try {
    const response = await instance.get('/product')
    dispatch(productListSuccess(response.data.data));
  } catch (error) {
    toaster.error(error.response.data.message);
  }
};

export default productListSlice.reducer;
