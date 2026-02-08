import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

export default router;
