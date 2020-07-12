import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <img src={logoImg} alt="Kingcook" />
      <button type="button" onClick={() => history.goBack()}>
        <FiArrowLeft size={20} color="#C52943" />
        Voltar
      </button>
    </Container>
  );
};

export default Header;
