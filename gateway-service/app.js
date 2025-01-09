const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use("/products", createProxyMiddleware({ target: "http://product-service:5001", changeOrigin: true }));
app.use("/orders", createProxyMiddleware({ target: "http://order-service:5002", changeOrigin: true }));
app.use("/inventory", createProxyMiddleware({ target: "http://inventory-service:5003", changeOrigin: true }));

app.listen(5000, () => {
  console.log("API Gateway running on port 5000");
});
