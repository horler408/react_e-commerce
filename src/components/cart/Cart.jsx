import React from 'react';
import { useSelector } from 'react-redux';

import CartItems from './CartItems';
import EmptyCart from './EmptyCart';
import Buttons from './Buttons';

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div>
      {state.length === 0 && EmptyCart()}
      {state.length !== 0 && state.map(CartItems)}
      {state.length !== 0 && Buttons()}
    </div>
  );
};

export default Cart;
