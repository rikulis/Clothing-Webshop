// Example CartContext.js

import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Your logic to add an item to the cart
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    // ... other cases

    case "CLEAR_CART":
      // Clear the cart items
      return { ...state, cartItems: [] };
    // ... other cases

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    // ... other initial state
  });

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  // ... other functions

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const values = {
    cartItems: state.cartItems,
    addToCart,
    clearCart,
    // ... other values
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
