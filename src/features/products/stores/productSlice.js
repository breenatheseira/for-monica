import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector
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
  reducers: {
    hideProduct(state, action){
      const { id, display } = action.payload
      state.entities[id].display = display
    },
    clearProductStore(state){
      productsAdapter.removeAll(state)
      console.log('store cleared')
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        productsAdapter.upsertOne(state, action.payload)
        state.status = 'succeeded'
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export default productsSlice.reducer;

export const {
  hideProduct,
  clearProductStore,
} = productsSlice.actions

export const fetchProduct = createAsyncThunk('products/fetchProduct', async (url) => {
  let result = await api.getProduct(url)
  return serializeProduct(result.data)
})

export const {
  selectAll: selectAllProducts,
  selectTotal: selectProductsTotal,
} = productsAdapter.getSelectors(state => state.products)

export const selectProductLinks = createSelector(
  selectAllProducts,
  products => products.map(product => product.link)
)