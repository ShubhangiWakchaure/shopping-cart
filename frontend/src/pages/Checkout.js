import React, { useContext, useState } from "react";
import "./CSS/Checkout.css";
import { ShopContext } from "../Context/ShopContext";

function CheckoutPage() {
  const { cartItems, all_product, getTotalCartAmount } = useContext(ShopContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Find all products added in the cart
  const cartProducts = all_product.filter((p) => cartItems[p.id] > 0);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartProducts.length === 0) {
      alert("Your cart is empty! Please add some products first.");
      return;
    }
    setOrderPlaced(true);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      {!orderPlaced ? (
        <div className="checkout-content">
          <div className="checkout-form">
            <h2>Billing Details</h2>
            <form onSubmit={handleCheckout}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                required
              />

              <label>Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleInputChange}
                required
              />

              <button type="submit" className="checkout-btn">
                Complete Purchase
              </button>
            </form>
          </div>

          <div className="checkout-summary">
            <h2>Order Summary</h2>
            {cartProducts.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cartProducts.map((item) => (
                  <li key={item.id}>
                    <span>{item.name}</span>
                    <span>
                      ₹{item.new_price} × {cartItems[item.id]}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <hr />
            <div className="checkout-total">
              <strong>Total:</strong>
              <span>₹{getTotalCartAmount()}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="receipt-box">
          <h2>🎉 Order Confirmed!</h2>
          <p>
            Thank you, <b>{form.name}</b>!
          </p>
          <p>We’ve sent a confirmation to <b>{form.email}</b></p>
          <p>
            <b>Total:</b> ₹{getTotalCartAmount()}
          </p>
          <p>Your order will be delivered to:</p>
          <p className="address-box">{form.address}</p>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
