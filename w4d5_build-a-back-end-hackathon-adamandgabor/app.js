import express, { Router } from "express";

import { html } from "./config.js";

import { recipesRouter } from "./router/recipes.js"
//const recipeRoute = import("./router/recipes.js").default


const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.use('/recipes', recipesRouter)

/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.sendFile(html);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

