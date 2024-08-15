import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/listings/stores/productSlice.js';

export default configureStore({
  reducer: {
    products: productReducer,
  }
})