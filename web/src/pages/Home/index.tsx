import React from 'react';

import { FiArrowRight, FiPlus } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Kingcook" />
        <h1>Seu livro de receitas online.</h1>

        <button type="button">
          Ver Receitas
          <FiArrowRight size={25} />
        </button>

        <a href="/register">
          <FiPlus size={20} color="#c52943" />
          Cadastrar nova receita
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default Home;
