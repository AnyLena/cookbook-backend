import { recipes } from "../recipes.js";

export const getRecipes = (req, res) => {
  res.json(recipes);
};

export const getRecipe = (req, res) => {
  let { recipe_id } = req.params;
  const recipe = recipes.recipes.find((recipe) => recipe.id == recipe_id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send("No such recipe exists");
  }
};
