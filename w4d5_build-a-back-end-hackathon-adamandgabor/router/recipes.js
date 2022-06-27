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
} from "../models/recipes.js";

recipesRouter.get("/", function (req, res) {
  res.json(getRecipes());
});

recipesRouter.get("/:id", function (req, res) {
  const id = req.params.id;
  res.json(getRecipeByID(id));
});

recipesRouter.post("/", function (req, res) {
  const body = req.body;
  res.json(createRecipe(body));
});

recipesRouter.put("/:id", function (req, res) {
  const id = req.params.id;
  let body = req.body;
  res.json(updateRecipeByID(id, body));
});

/*
//http://localhost:3000/recipes/id route
recipesRouter.get('/:id', function(req, res){
    const id = req.params.id;
    let searchedRecipes =[];
    for(let i = 0;i < recipes.length; i++){
        if (id == recipes[i].id){
            searchedRecipes.push(recipes[i])
            break;
        }
    }

    const responseObject = {success: Boolean, payload: searchedRecipes }
    res.json(responseObject)
    });

*/
/*import { getRecipeByID } from '../models/recipes.js';

getRecipeByID();*/

/*
//Updating a recipe using PUT
recipesRouter.put('/:id', function(req, res){
    const id = req.params.id;
    let body = req.body;
  
    for(let i = 0;i < recipes.length; i++){
        if (id == recipes[i].id){
            recipes[i] = body;
            break;
        }
    }

    const responseObject = {success: Boolean, payload: recipes }
    res.json(responseObject)
    });
*/

/*
    
    recipesRouter.delete('/:id', (req, res) => {
        console.log("DELETE Request Called for /api endpoint");
        //res.send("DELETE Request Called");
        const id = Number(req.params.id);
        //recipes.splice(id, 1)
    for(let i = 0; i < recipes.length; i++){
        if (id === recipes[i].id){
            recipes.splice(i, 1) 
        }
    
        const responseObject = {success: Boolean, payload: recipes }
        res.json(responseObject)
        }});
*/

deleteRecipeByID();

export { recipesRouter };
