import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, ordersReducer } from './slices';
import { productsReducer } from './slices/ProductsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer
  },
});
