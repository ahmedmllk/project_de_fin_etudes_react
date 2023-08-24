import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addtionproduct:(state,action)=>{
      state.value=[...state.value,action.payload]
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addtionproduct } = counterSlice.actions

export default counterSlice.reducer