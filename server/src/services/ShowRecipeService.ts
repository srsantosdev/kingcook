import { getRepository } from 'typeorm';

import Recipe from '../models/Recipe';

import AppError from '../errors/AppError';

interface Request {
  id: string;
}

export default class ShowRecipeService {
  public async execute({ id }: Request): Promise<Recipe> {
    const recipeRepository = getRepository(Recipe);

    const recipe = await recipeRepository.findOne({
      where: { id },
      relations: ['ingredients', 'preparation_modes'],
    });

    if (!recipe) {
      throw new AppError('Recipe not found.', 404);
    }

    return recipe;
  }
}
