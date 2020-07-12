import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Kingcook" />
        <h1>Seu livro de receitas online.</h1>

        <button type="button" onClick={() => history.push('/recipes')}>
          Ver Receitas
          <FiArrowRight size={25} />
        </button>

        <Link to="/register">
          <FiPlus size={20} color="#c52943" />
          Cadastrar nova receita
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default Home;
