import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[]
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addproduct:(state,action)=>{
        state.products=[...state.products,action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addproduct } = ProductSlice.actions

export default ProductSlice.reducer