import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authSlice from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import orderSlice from '../features/order/orderSlice';
import productSlice from '../features/product/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    productFilter: productSlice,
    auth: authSlice,
    order: orderSlice
  },
  devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export const server__image__host__url = 'http://localhost:10000'