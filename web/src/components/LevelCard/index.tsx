import React from 'react';

import { Container } from './styles';

interface LevelCardProps {
  type?: 'easy' | 'medium' | 'hard';
}

const serializedType = {
  easy: 'Fácil',
  medium: 'Intermediário',
  hard: 'Difícil',
};

const LevelCard: React.FC<LevelCardProps> = ({ type }) => {
  return (
    <Container type={type}>{type && <p>{serializedType[type]}</p>}</Container>
  );
};

export default LevelCard;
