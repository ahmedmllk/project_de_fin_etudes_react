import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './slices/ProductSlice'
import shoppingSlice from './slices/shoppingSlice'

export const store = configureStore({
  reducer: {
    product:ProductSlice,
    counter:shoppingSlice,
  },
})