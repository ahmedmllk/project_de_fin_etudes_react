import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:[
    {
      name:'PRX 40 205',
      brand:'TISSOT',
      image:PRX,
      logo:tissot,
      price:335,
      sexe:'Mixed',
    },
    {
      name:'',
      brand:'',
      image:'',
      sexe:'',
      Price:0,
    },
    {
    name:'',
    brand:'',
    image:'',
    sexe:'',
    Price:0,
    }
  ],
}

export const counterSlice = createSlice({
  name: 'watches',
  initialState,
  reducers: {
    
  },
})


export const {} = counterSlice.actions

export default counterSlice.reducer