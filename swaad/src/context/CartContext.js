import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  // All calculations related to cart totals
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const TAX_RATE = 0.18;
  const taxes = totalPrice * TAX_RATE;
  const grandTotal = totalPrice + taxes;

  const value = {
    cartItems,
    addToCart,
    decreaseQuantity,
    clearCart,
    totalItemsInCart,
    totalPrice,   
    taxes,        
    grandTotal,   
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};