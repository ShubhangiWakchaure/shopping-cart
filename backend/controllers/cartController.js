import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

export const getCart = async (req, res) => {
  const items = await Cart.find();
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  res.json({ items, total });
};

export const addToCart = async (req, res) => {
  const { productId, qty } = req.body;
  const product = await Product.findById(productId);
  const cartItem = new Cart({
    productId,
    name: product.name,
    price: product.price,
    qty,
  });
  await cartItem.save();
  res.json(cartItem);
};

export const deleteFromCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.send("Item removed");
};

export const checkout = async (req, res) => {
  const { cartItems } = req.body;
  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  res.json({ message: "Checkout successful", total, timestamp: new Date() });
};
