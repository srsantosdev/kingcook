import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Kingcook" />
      <a href="/">
        <FiArrowLeft size={20} color="#C52943" />
        Voltar
      </a>
    </Container>
  );
};

export default Header;
