import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../types'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [] as IProduct[],
  },
  reducers: {
    addToCart: (state, action: any) => {
      state.value.push(action.payload)
    },
    deleteFromCart: (state, action) => {
      state.value = state.value.filter(({ id }) => id !== action.payload)
    },
    resetCart: (state)=> {
      state.value = []
    }
  },
})
// acciones
export const { addToCart, deleteFromCart, resetCart } = cartSlice.actions
// reducer
export const cartReducer = cartSlice.reducer
