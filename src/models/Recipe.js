import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  quantity: { type: String, required: true, trim: true }
}, { _id: false });

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  ingredients: { type: [ingredientSchema], default: [] },
  steps: { type: [String], default: [] },
  cuisine: { type: String, default: "" },
  prepTimeMins: { type: Number, min: 0, default: 0 },
  cookTimeMins: { type: Number, min: 0, default: 0 },
  servings: { type: Number, min: 1, default: 1 },
  isVegetarian: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Recipe", recipeSchema);
