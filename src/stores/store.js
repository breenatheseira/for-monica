import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/stores/productSlice.js';

export default configureStore({
  reducer: {
    products: productReducer,
  }
})