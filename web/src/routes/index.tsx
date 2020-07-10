import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import RecipeList from '../pages/RecipeList';
import Details from '../pages/Details';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" component={RecipeList} />
        <Route path="/detail" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
