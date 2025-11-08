import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};


export const seedProducts = async (req, res) => {
  const mock = [
    { name: "Headphones", price: 1200, image: "https://via.placeholder.com/150" },
    { name: "Laptop", price: 55000, image: "https://via.placeholder.com/150" },
    { name: "Keyboard", price: 800, image: "https://via.placeholder.com/150" },
    { name: "Shoes", price: 1500, image: "https://via.placeholder.com/150" },
  ];
  await Product.insertMany(mock);
  res.send("Mock products added");
};
