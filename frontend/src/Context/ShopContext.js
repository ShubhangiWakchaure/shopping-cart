import React, { createContext, useState, useEffect } from "react";

// Create Context
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Fetch all cart items from backend on first load
  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then((res) => res.json())
      .then((data) => setCartItems(data.items || []))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  // ✅ Add item to cart (backend + frontend update)
  const addToCart = async (productId) => {
    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, qty: 1 }),
      });

      const newItem = await res.json();

      // Update React state immediately
      setCartItems((prev) => [...prev, newItem]);
      alert("✅ Item added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // ✅ Remove item from cart (backend + frontend update)
  const removeFromCart = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/cart/${id}`, { method: "DELETE" });
      setCartItems((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  // ✅ Calculate total amount
  const getTotalCartAmount = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  };

  // ✅ Count total items
  const getTotalCartItems = () => {
    return cartItems.reduce((sum, item) => sum + item.qty, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
