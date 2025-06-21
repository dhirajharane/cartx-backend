const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    additionalImages: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
