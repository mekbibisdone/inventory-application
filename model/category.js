const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  adminKey: { type: String, required: true },
  gadgets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gadget" }],
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
