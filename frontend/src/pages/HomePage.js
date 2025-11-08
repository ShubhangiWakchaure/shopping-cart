import React from "react";
import { Link } from "react-router-dom";

import product_37 from "../components/Assets/product_37.png";
import product_40 from "../components/Assets/product_40.png";
import product_38 from "../components/Assets/product_38.png";
import product_39 from "../components/Assets/product_39.png";

const featuredProducts = [
  { id: 1, name: "Red Dress", price: "$49", image: product_37 },
  { id: 2, name: "Blue Jeans", price: "$39", image: product_40 },
  { id: 3, name: "Sneakers", price: "$59", image: product_38},
  { id: 4, name: "Handbag", price: "$79", image: product_39 },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(to right, #ff758c, #ff7eb3)",
        color: "#fff",
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Welcome to Nexora Fashion</h1>
        <p style={{ fontSize: "20px", marginBottom: "40px" }}>Discover your style. Trendy fashion just for you!</p>
        <Link to="/Product">
          <button style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#fff",
            color: "#ff4d6d",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Shop Now
          </button>
        </Link>
      </div>

      {/* Featured Products */}
      <div style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "40px", fontSize: "32px" }}>Featured Products</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>
          {featuredProducts.map(product => (
            <div key={product.id} style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}>
              <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "10px" }} />
              <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
              <p style={{ fontWeight: "bold" }}>{product.price}</p>
              <Link to={`/product/${product.id}`}>

                <button style={{
                  padding: "10px 15px",
                  backgroundColor: "#ff4d6d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}>View</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
