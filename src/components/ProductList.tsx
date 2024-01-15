// src/components/ProductList.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { RootState } from '../app/store';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.visibleIds.map((id) => state.product.byId[id]));

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>Quantity: {product.quantity}</p>
          {product.quantity > 0 ? (
            <button onClick={() => dispatch(addToCart({ productId: product.id }))}>Add to cart</button>
          ) : (
            <button disabled>Sold out</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
