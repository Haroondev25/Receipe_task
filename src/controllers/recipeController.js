import Recipe from "../models/Recipe.js";

export const createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json({ data: recipe });
  } catch (err) { next(err); }
};

export const getAllRecipes = async (req, res, next) => {
  try {
    const { q } = req.query;
    const filter = q ? { title: new RegExp(q, "i") } : {};
    const recipes = await Recipe.find(filter).sort({ createdAt: -1 });
    res.json({ data: recipes });
  } catch (err) { next(err); }
};

export const getRecipeById = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json({ data: recipe });
  } catch (err) { next(err); }
};

export const updateRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id, req.body, { new: true, runValidators: true }
    );
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json({ data: recipe });
  } catch (err) { next(err); }
};

export const deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(204).send();
  } catch (err) { next(err); }
};
