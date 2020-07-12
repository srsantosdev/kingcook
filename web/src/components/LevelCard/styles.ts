import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 124px;
  height: 16px;
  background: #fef79b;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.type === 'easy' &&
    css`
      background: #cbfad3;
    `}

  ${props =>
    props.type === 'medium' &&
    css`
      background: #fef79b;
    `}

  ${props =>
    props.type === 'hard' &&
    css`
      background: #fcc4ad;
    `}

  p {
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    color: #343434;
  }
`;
