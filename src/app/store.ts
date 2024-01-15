import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import productReducer from '../features/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
