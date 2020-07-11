import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Kingcook" />
      <Link to="/">
        <FiArrowLeft size={20} color="#C52943" />
        Voltar
      </Link>
    </Container>
  );
};

export default Header;
