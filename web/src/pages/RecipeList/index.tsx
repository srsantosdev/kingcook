import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import LevelCard from '../../components/LevelCard';

import api from '../../services/api';
import formatDate from '../../utils/formatDate';

import { Container, Recipes, Details } from './styles';

interface Recipe {
  id: string;
  name: string;
  image_url: string;
  level: 'easy' | 'medium' | 'hard';
  created_at: string;
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/recipes');
      setRecipes(response.data);
    }

    loadData();
  }, []);

  const handleClick = useCallback((id: string) => {
    localStorage.setItem('@kingcook:recipe', id);
  }, []);

  return (
    <Container>
      <Header />
      <Recipes>
        {recipes.map(recipe => (
          <Link
            key={recipe.id}
            to="/detail"
            onClick={() => handleClick(recipe.id)}
          >
            <img src={recipe.image_url} alt={recipe.name} />
            <Details>
              <h2>{recipe.name}</h2>
              <footer>
                <LevelCard type={recipe.level} />
                <p>Criada em: {formatDate(recipe.created_at)}</p>
              </footer>
            </Details>
          </Link>
        ))}

        <span />
      </Recipes>
    </Container>
  );
};

export default RecipeList;
