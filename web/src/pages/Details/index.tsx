import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import LevelCard from '../../components/LevelCard';

import api from '../../services/api';

import { Container, Content, Image, Recipe } from './styles';

interface Recipe {
  id: string;
  image_url: string;
  level: 'easy' | 'medium' | 'hard';
  name: string;
  ingredients: {
    id: string;
    detail: string;
  }[];
  preparation_modes: {
    id: string;
    detail: string;
  }[];
}

const Details: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    async function loadData() {
      const id = localStorage.getItem('@kingcook:recipe');
      const response = await api.get(`/recipes/${id}`);

      setRecipe(response.data);
    }
    loadData();
  });

  return (
    <Container>
      <Header />
      {recipe && (
        <Content>
          <Image src={recipe.image_url} alt={recipe.name} />

          <Recipe>
            <header>
              <h1>{recipe.name}</h1>
              <LevelCard type={recipe.level} />
            </header>

            <section>
              <h2>Ingredientes</h2>

              <ul>
                {recipe.ingredients.map(ingredient => (
                  <li key={ingredient.id}>{ingredient.detail}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Modo de Preparo</h2>

              <ol>
                {recipe.preparation_modes.map(mode => (
                  <li key={mode.id}>{mode.detail}</li>
                ))}
              </ol>
            </section>
          </Recipe>
        </Content>
      )}
    </Container>
  );
};

export default Details;
