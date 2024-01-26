import express from 'express';
import { getRecipes, getRecipe } from '../controllers/recipesController.js';

const recipesRouter = express.Router()

recipesRouter.get('/', getRecipes);
recipesRouter.get('/:recipe_id', getRecipe)

export default recipesRouter;