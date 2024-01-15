import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  addedIds: number[];
  quantityById: { [key: number]: number };
}

const initialState: CartState = {
  addedIds: [],
  quantityById: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId } = action.payload;
      if (state.addedIds.indexOf(productId) === -1) {
        state.addedIds.push(productId);
      }
      state.quantityById[productId] = (state.quantityById[productId] || 0) + 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
