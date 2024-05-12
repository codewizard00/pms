// reducers/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toaster } from '../../utils/toastify/toaster';
import instance from '../../utils/axiosInstance';

export const updateProductSlice = createSlice({
  name: 'createProduct',
  initialState: {
    status: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateProductSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    updateProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { updateProductStart, updateProductSuccess, updateProductFailure } = updateProductSlice.actions;

export const updateProduct = (data,id) => async (dispatch) => {
  dispatch(updateProductStart());
  try {
    const response = await instance.patch(`/product/${id}`, data)
    dispatch(updateProductSuccess(response.data.message));
    toaster.success(response.data.message);
  } catch (error) {
    dispatch(updateProductFailure(error.response.data.message));
    toaster.error(error.response.data.message);
  }
};

export default updateProductSlice.reducer;
