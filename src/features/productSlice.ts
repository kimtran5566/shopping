import { createSlice } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductState {
  byId: { [key: number]: Product };
  visibleIds: number[];
}

const initialState: ProductState = {
  byId: {},
  visibleIds: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    receiveProducts: (state, action) => {
      action.payload.forEach((product: Product) => {
        state.byId[product.id] = product;
        state.visibleIds.push(product.id);
      });
    },
  },
});

export const { receiveProducts } = productSlice.actions;
export default productSlice.reducer;
