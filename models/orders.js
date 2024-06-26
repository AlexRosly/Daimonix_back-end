const { Schema, model } = require("mongoose");

const orderSchema = Schema(
  {
    buyerName: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    state: { type: String },
    locality: { type: String },
    post: { type: String },
    postOffice: { type: String },
    connectionMethod: [{ type: String }],
    additionalInfo: { type: String },
    amountInOrder: { type: Number },
    quantityInOrder: { type: Number },
    status: { type: String, default: "new" },
    statusAfterProcessing: [{ type: String }],
  },
  { versionKey: false, timestamps: true }
);

const Order = model("orders", orderSchema);

module.exports = Order;
