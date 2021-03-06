import { Router } from 'express';
import { getRepository } from 'typeorm';

import multer from 'multer';
import uploadConfig from '../config/upload';

import Recipe from '../models/Recipe';

import CreateRecipeService from '../services/CreateRecipeService';
import ShowRecipeService from '../services/ShowRecipeService';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/', async (_, response) => {
  const recipeRepository = getRepository(Recipe);

  const recipes = await recipeRepository.find();

  const serializedRecipes = recipes.map(recipe => ({
    ...recipe,
    image_url: `http://localhost:3333/files/${recipe.image_url}`,
  }));

  return response.json(serializedRecipes);
});

routes.post('/', upload.single('recipe_img'), async (request, response) => {
  const { name, level, ingredients, preparation_modes } = request.body;

  const { filename } = request.file;

  const createRecipe = new CreateRecipeService();

  const recipe = await createRecipe.execute({
    name,
    image_url: filename,
    level,
    ingredients,
    preparation_modes,
  });

  return response.json(recipe);
});

routes.get('/:id', async (request, response) => {
  const { id } = request.params;

  const showRecipe = new ShowRecipeService();

  const recipe = await showRecipe.execute({ id });

  const serializedRecipe = {
    ...recipe,
    image_url: `http://localhost:3333/files/${recipe.image_url}`,
  };

  return response.json(serializedRecipe);
});

export default routes;
