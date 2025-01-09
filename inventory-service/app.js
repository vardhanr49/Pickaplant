const express = require("express");
const app = express();
app.use(express.json());

let inventory = [
  { productId: 1, stock: 50 },
  { productId: 2, stock: 30 },
  { productId: 3, stock: 20 },
];

app.get("/inventory/:productId", (req, res) => {
  const item = inventory.find((i) => i.productId == req.params.productId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Product not found in inventory");
  }
});

app.post("/inventory/update", (req, res) => {
  const { productId, quantity } = req.body;
  const item = inventory.find((i) => i.productId == productId);

  if (item) {
    item.stock -= quantity;
    res.json(item);
  } else {
    res.status(404).send("Product not found in inventory");
  }
});

app.listen(5003, () => {
  console.log("Inventory service running on port 5003");
});
