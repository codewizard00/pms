// reducers/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import {  loginSlice } from './loginReducers';
import {  productListSlice } from './allProductReducers';
import { productSlice } from './productReducer';
import { deleteProductSlice } from './deleteProductReducer';
import {  updateProductSlice } from './updateProductReducer';
import { registerSlice } from './register.reducers';

const rootReducer = combineReducers({
  login: loginSlice.reducer,
  register: registerSlice.reducer,
  productList: productListSlice.reducer,
  product: productSlice.reducer,
  deleteProduct: deleteProductSlice.reducer,
  updateProduct: updateProductSlice.reducer,
  // Add more reducers here if needed
});

export default rootReducer;
