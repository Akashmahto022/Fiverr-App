import mongoose, { Schema } from "mongoose";

const orderScehma = new Schema(
  {
    gigId: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: false,
    },
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    sellerId: {
      type: String,
      require: true,
    },
    buyerId: {
      type: String,
      require: true,
    },
    isCompleted: {
      type: Boolean,
      default:false
    },
    payment_intent: {
      type: Boolean,
      default:false
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderScehma);
