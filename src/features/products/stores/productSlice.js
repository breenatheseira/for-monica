import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk
} from '@reduxjs/toolkit';

import api from '../../../utils/api.js'

import { serializeProduct } from './productSerializer.js';

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
  status: 'idle', // or: 'loading', 'succeeded', 'failed'
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        productsAdapter.addOne(state, action.payload)
        state.status = 'succeeded'
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export default productsSlice.reducer;

export const fetchProduct = createAsyncThunk('products/fetchProduct', async (url) => {
  let result = await api.getProduct(url)
  return serializeProduct(result.data)
})

export const {
  selectAll: selectAllProducts,
  selectTotal: selectProductsTotal,
} = productsAdapter.getSelectors(state => state.products)