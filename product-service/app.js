const express = require("express");
const app = express();
app.use(express.json());

const products = [
  { id: 1, name: "Aloe Vera", price: 10.0 },
  { id: 2, name: "Rose Plant", price: 15.0 },
  { id: 3, name: "Bamboo Plant", price: 20.0 },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

app.listen(5001, () => {
  console.log("Product service running on port 5001");
});
