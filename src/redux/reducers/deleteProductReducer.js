// reducers/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toaster } from '../../utils/toastify/toaster';
import instance from '../../utils/axiosInstance';
import { productList } from './allProductReducers';

export const deleteProductSlice = createSlice({
  name: 'deleteProduct',
  initialState: {
    list: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteProductSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    deleteProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { deleteProductStart, deleteProductSuccess, deleteProductFailure } = deleteProductSlice.actions;

export const deleteProduct = (id) => async (dispatch) => {
  dispatch(deleteProductStart());
  try {
    const response = await instance.delete(`/product/${id}`)
    dispatch(productList())
    dispatch(deleteProductSuccess(response.data.data));
    toaster.success(response.data.message)
  } catch (error) {
    toaster.error(error.response.data.message);
  }
};

export default deleteProductSlice.reducer;
