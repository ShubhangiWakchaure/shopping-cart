import React from "react";
import "./CSS/ShopNow.css";
import all_product from "../components/Assets/all_product";
import { Link } from "react-router-dom";

const ShopNow = () => {
  return (
    <div className="shopnow-container">
      <h1 className="shopnow-title">🛍️ Explore Our Latest Collection</h1>
      <p className="shopnow-subtitle">
        Find the perfect style that suits your personality!
      </p>

      <div className="shopnow-grid">
        {all_product.map((product) => (
          <div key={product.id} className="shopnow-card">
            <img
              src={product.image}
              alt={product.name}
              className="shopnow-image"
            />
            <h3 className="shopnow-name">{product.name}</h3>
            <p className="shopnow-price">₹{product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button className="shopnow-btn">View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopNow;
