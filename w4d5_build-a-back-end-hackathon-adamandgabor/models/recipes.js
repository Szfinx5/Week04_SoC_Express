import { recipes } from "../libs/recipes.js";
import { recipesRouter } from "../router/recipes.js";

// GET ALL RECIPES
export function getRecipes() {
  const responseObject = { success: Boolean, payload: recipes };
  return responseObject;
}

// GET A RECIPE BY ID
export function getRecipeByID(id) {
  let searchedRecipes = recipes.filter((r) => r.id == id);
  const responseObject = { success: Boolean, payload: searchedRecipes };
  return responseObject;
}

// CREATE A RECIPE
export function createRecipe(newRecipe) {
  recipes.push(newRecipe);
  const responseObject = {
    success: true,
    message: `Added the following recipe: Title: ${recipes.title} and the ID is ${recipes.id}`,
    data: recipes,
  };
  return responseObject;
}

// UPDATE A RECIPE BY ID
export function updateRecipeByID(id, updatedRecipe) {
  for (let i = 0; i < recipes.length; i++) {
    if (id == recipes[i].id) {
      recipes[i] = updatedRecipe;
      break;
    }
  }
  const responseObject = { success: Boolean, payload: recipes };
  return responseObject;
}

// DELETE A RECIPE BY ID
export function deleteRecipeByID(id) {
  const returnObject = [...recipes.filter((r) => id !== r.id)];
  const responseObject = { success: Boolean, payload: returnObject };
  return responseObject;
}

// GET A RECIPE BY TITLE
export function getRecipeByTitle(title) {
  const returnObject = [...recipes.filter((r) => r.title.includes(title))];
  return returnObject;
}

// GET A RECIPE BY INGREDIENT
export function getRecipeByIngredient(ingredient) {
  const returnObject = recipes.filter((recept) => {
    console.log(recept.ingredients);
    return recept.ingredients.find((r) => r.includes(ingredient));
  });
  return returnObject;
}
