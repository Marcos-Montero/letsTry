import { UsbOutlined } from '@material-ui/icons'
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { v4 } from 'uuid'

const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        values: []
    },
    reducers: {
        addOrder: (state: any, action: any)=> {
            state.values.push({
                id: v4(),
                products: action.products,
                price: action.price,
                date: Date.now()
            })
        }
    }
})
// acciones
export const { addOrder } = ordersSlice.actions;
// reducer
export const ordersReducer = ordersSlice.reducer;
