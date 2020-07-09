import { getRepository } from 'typeorm';

import Recipe from '../models/Recipe';
import Ingredient from '../models/Ingredient';
import PreparationMode from '../models/PreparationMode';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  image_url: string;
  level: 'easy' | 'medium' | 'hard';
  ingredients: string;
  preparation_modes: string;
}

class CreateRecipeService {
  public async execute({
    name,
    image_url,
    level,
    ingredients,
    preparation_modes,
  }: Request): Promise<Recipe> {
    const recipeRepository = getRepository(Recipe);
    const ingredientRepository = getRepository(Ingredient);
    const preparationModeRepository = getRepository(PreparationMode);

    if (!name || !level) {
      throw new AppError('Name and level is required to create recipes.');
    }

    const serializedIngredients = ingredients
      .split(';')
      .map(ingredient => ingredient.trim());

    const serializedPreparationModes = preparation_modes
      .split(';')
      .map(modes => modes.trim());

    const createdRecipe = recipeRepository.create({
      name,
      image_url,
      level,
    });

    await recipeRepository.save(createdRecipe);

    const createdIngredients = serializedIngredients.map(ingredient => {
      return ingredientRepository.create({
        detail: ingredient,
        recipe_id: createdRecipe.id,
      });
    });

    const createdPreparationModes = serializedPreparationModes.map(
      preparation_mode => {
        return preparationModeRepository.create({
          detail: preparation_mode,
          recipe_id: createdRecipe.id,
        });
      },
    );

    await ingredientRepository.save(createdIngredients);
    await preparationModeRepository.save(createdPreparationModes);

    return createdRecipe;
  }
}

export default CreateRecipeService;
