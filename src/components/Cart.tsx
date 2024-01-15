// src/components/Cart.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const products = useSelector((state: RootState) => state.product.byId);

  return (
    <div>
      <h2>Cart</h2>
      {cart.addedIds.length === 0 ? (
        <p>Please add some products to cart.</p>
      ) : (
        <div>
          {cart.addedIds.map((id) => (
            <div key={id}>
              <p>{products[id].name}</p>
              <p>Price: {products[id].price}</p>
              <p>Quantity: {cart.quantityById[id]}</p>
            </div>
          ))}
          <p>Total: {calculateTotal(cart, products)}</p>
        </div>
      )}
    </div>
  );
};

const calculateTotal = (cart: any, products: any) => {
  return cart.addedIds.reduce((total: number, id: number) => {
    return total + products[id].price * cart.quantityById[id];
  }, 0);
};

export default Cart;
