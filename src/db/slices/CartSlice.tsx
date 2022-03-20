import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../types'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [] as IProduct[]
  },
  reducers: {
    addProduct: (state, action: any) => {
      state.value.push(action.payload)
    },
    deleteProduct: (state, action) => {
      state.value.filter(action.payload)
    },
  },
})
// acciones
export const { addProduct, deleteProduct } = cartSlice.actions
// reducer
export const cartReducer = cartSlice.reducer

