import { Router } from 'express';
import { getRepository } from 'typeorm';

import Recipe from '../models/Recipe';

import CreateRecipeService from '../services/CreateRecipeService';

const routes = Router();

routes.get('/recipes', async (request, response) => {
  const recipeRepository = getRepository(Recipe);

  const recipes = await recipeRepository.find({
    relations: ['ingredients', 'preparation_modes'],
  });

  return response.json(recipes);
});

routes.post('/recipes', async (request, response) => {
  const {
    name,
    image_url,
    level,
    ingredients,
    preparation_modes,
  } = request.body;

  const createRecipe = new CreateRecipeService();

  const recipe = await createRecipe.execute({
    name,
    image_url,
    level,
    ingredients,
    preparation_modes,
  });

  return response.json(recipe);
});

export default routes;
