import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "./../productsData";

export const CartContext = createContext(0);

const getDefaultCart = () => {
  let cart = {};
  PRODUCTS.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const taxRate = 0.08; // 8% tax rate
  const getTotalCartAmountFinal = () => {
    let totalAmount = 0;
    // Calculate total amount without tax and delivery
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    // Calculate tax
    const taxAmount = totalAmount * taxRate;
    // Calculate delivery cost
    const deliveryCost = 16; // Example delivery cost
    // Add tax and delivery to the total amount
    totalAmount += taxAmount + deliveryCost;
    return totalAmount.toFixed(2); // Return total amount rounded to 2 decimal places
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const clearCart = () => {
    const updatedCartItems = {};
    Object.keys(cartItems).forEach((itemId) => {
      updatedCartItems[itemId] = 0;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        updateCartItemCount,
        cartItems,
        checkout,
        getTotalCartAmount,
        getTotalCartAmountFinal,
        taxRate,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
