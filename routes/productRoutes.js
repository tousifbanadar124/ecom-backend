const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.get("/products", getAllProducts);

productRoutes.get("/products/:id", getProductById);

productRoutes.post("/products", createProduct);

productRoutes.put("/Products/:id", updateProduct);

productRoutes.delete("/products/:id", deleteProduct);

module.exports = productRoutes;
