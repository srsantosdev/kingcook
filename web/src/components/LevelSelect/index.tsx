import React, { useState, useCallback, useEffect } from 'react';

import { Container, Element } from './styles';

interface LevelSelectProps {
  onChange(level: string): void;
}

const LevelSelect: React.FC<LevelSelectProps> = ({ onChange }) => {
  const [selected, setSelected] = useState('');

  const handleClick = useCallback((type: string) => {
    setSelected(type);
  }, []);

  useEffect(() => {
    onChange(selected);
  }, [onChange, selected]);

  return (
    <Container>
      <label>Nível de dificuldade</label>
      <ul>
        <Element
          type="easy"
          isSelected={selected === 'easy'}
          onClick={() => handleClick('easy')}
        >
          Fácil
        </Element>
        <Element
          type="medium"
          isSelected={selected === 'medium'}
          onClick={() => handleClick('medium')}
        >
          Intermediário
        </Element>
        <Element
          type="hard"
          isSelected={selected === 'hard'}
          onClick={() => handleClick('hard')}
        >
          Difícil
        </Element>
      </ul>
    </Container>
  );
};

export default LevelSelect;
