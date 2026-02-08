import React from 'react'
import { useContext } from "react";
import { CardContext } from "../Context/CardContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="border p-3 mb-2">
              <h2 className="font-semibold">{item.name}</h2>
              <p>Price: ${item.price}</p>
            </div>
          ))}

          <h2 className="text-xl mt-4">Total: ${total}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;

