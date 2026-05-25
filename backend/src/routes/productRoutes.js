import { Router } from "express";
import {
  getAllProducts,
  addProduct,
} from "../services/productService.js";

const router = Router();

router.get("/", (req, res) => {
  const products = getAllProducts();

  res.json(products);
});

router.post("/", (req, res) => {
  const product = addProduct(req.body);

  res.status(201).json(product);
});

export default router;