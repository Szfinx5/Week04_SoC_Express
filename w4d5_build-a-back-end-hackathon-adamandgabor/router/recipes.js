//Write your router code here!
import { Router } from "express";
const recipesRouter = Router();
import { recipes } from "../libs/recipes.js";
import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
  getRecipeByTitle,
  getRecipeByIngredient,
} from "../models/recipes.js";

// GET ALL RECIPES
recipesRouter.get("/", function (req, res) {
  //console.log(req.query);
  if (req.query.title !== undefined) {
    const title = req.query.title;
    res.json(getRecipeByTitle(title));
    return;
  }
  if (req.query.ingredient !== undefined) {
    const ingredient = req.query.ingredient;
    res.json(getRecipeByIngredient(ingredient));
    return;
  }
  res.json(getRecipes());
});

// GET A RECIPE BY ID
recipesRouter.get("/:id", function (req, res) {
  const id = req.params.id;
  res.json(getRecipeByID(id));
});

// CREATE A RECIPE
recipesRouter.post("/", function (req, res) {
  const body = req.body;
  res.json(createRecipe(body));
});

// UPDATE A RECIPE BY ID
recipesRouter.put("/:id", function (req, res) {
  const id = req.params.id;
  let body = req.body;
  res.json(updateRecipeByID(id, body));
});

// DELETE A RECIPE BY ID
recipesRouter.delete("/:id", (req, res) => {
  console.log("DELETE Request Called for /api endpoint");
  const id = Number(req.params.id);
  res.json(deleteRecipeByID(id));
});

export { recipesRouter };
