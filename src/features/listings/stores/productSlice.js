import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk
} from '@reduxjs/toolkit';

// import { api } from '../../../utils/api.js'

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
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        productsAdapter.addOne
        state.status = 'succeeded'
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
})

export default productsSlice.reducer;

export const fetchProduct = createAsyncThunk('products/fetchProduct', async (url) => {
  console.log('2. fetchProduct: ', url)
  // const response = await api.get(url)
  console.log(response)
})