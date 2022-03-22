import { UsbOutlined } from '@material-ui/icons'
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { v4 } from 'uuid'

const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        value: []
    },
    reducers: {
        addOrder: (state: any, action: any)=> {
            state.value.push({
                products: action.payload.products,
                price: action.payload.price,
                date: Date.now()
            })
        }
    }
})
// acciones
export const { addOrder } = ordersSlice.actions;
// reducer
export const ordersReducer = ordersSlice.reducer;
