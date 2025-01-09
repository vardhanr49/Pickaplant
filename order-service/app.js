const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

let orders = [];

app.post("/orders", async (req, res) => {
  const { productId, quantity } = req.body;
  const product = await axios.get(`http://product-service:5001/products/${productId}`);
  
  if (product.data) {
    const totalPrice = product.data.price * quantity;
    const order = { id: orders.length + 1, productId, quantity, totalPrice };
    orders.push(order);
    res.status(201).json(order);
  } else {
    res.status(404).send("Product not found");
  }
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(5002, () => {
  console.log("Order service running on port 5002");
});
