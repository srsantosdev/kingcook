import { Router } from 'express';

import recipeRoute from './recipe.routes';

const routes = Router();

routes.use('/recipes', recipeRoute);

export default routes;
