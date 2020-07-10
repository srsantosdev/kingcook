import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import RecipeList from '../pages/RecipeList';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" component={RecipeList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
