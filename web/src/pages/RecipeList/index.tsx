import React from 'react';
import Header from '../../components/Header';
import LevelCard from '../../components/LevelCard';

import { Container, Recipes, Details } from './styles';

const RecipeList: React.FC = () => {
  return (
    <Container>
      <Header />
      <Recipes>
        <a href="/">
          <img
            src="https://images.unsplash.com/photo-1560910615-9eaa2e704e63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80"
            alt="Cookie"
          />
          <Details>
            <h2>Cookie</h2>
            <footer>
              <LevelCard />
              <p>Criada em: 08/07/2020 às 08:00</p>
            </footer>
          </Details>
        </a>

        <span />
      </Recipes>
    </Container>
  );
};

export default RecipeList;
