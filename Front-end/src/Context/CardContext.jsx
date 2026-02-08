import React from 'react'
import { createContext, useState } from "react";

export const CardContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove product from cart
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  // Clear cart after order
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CardContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;