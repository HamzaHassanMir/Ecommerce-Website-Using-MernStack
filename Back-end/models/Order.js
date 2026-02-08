import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  products: Array,
  totalAmount: Number,
});

export default mongoose.model("Order", orderSchema);
