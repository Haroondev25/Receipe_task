import { Router } from "express";
import { body, param } from "express-validator";
import {
  createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe
} from "../controllers/recipeController.js";
import { handleValidation } from "../middleware/validate.js";

const router = Router();

const recipeBodyRules = [
  body("title").isString().notEmpty().withMessage("title required"),
  body("ingredients").optional().isArray(),
  body("steps").optional().isArray(),
  body("prepTimeMins").optional().isInt({ min: 0 }),
  body("cookTimeMins").optional().isInt({ min: 0 }),
  body("servings").optional().isInt({ min: 1 })
];

router.post("/", recipeBodyRules, handleValidation, createRecipe);
router.get("/", getAllRecipes);
router.get("/:id", param("id").isMongoId(), handleValidation, getRecipeById);
router.put("/:id", param("id").isMongoId(), recipeBodyRules, handleValidation, updateRecipe);
router.delete("/:id", param("id").isMongoId(), handleValidation, deleteRecipe);

export default router;
