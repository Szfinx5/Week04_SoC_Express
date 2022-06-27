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
  recipesRouter.delete("/:id", (req, res) => {
    console.log("DELETE Request Called for /api endpoint");
    //res.send("DELETE Request Called");
    id = Number(req.params.id);
    //recipes.splice(id, 1)
    for (let i = 0; i < recipes.length; i++) {
      if (id === recipes[i].id) {
        recipes.splice(i, 1);
      }

      const responseObject = { success: Boolean, payload: recipes };
      res.json(responseObject);
    }
  });
}
