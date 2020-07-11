import styled, { css } from 'styled-components';

interface ListProps {
  type: string;
  isSelected?: boolean;
}

const liStyle = {
  easy: ['#CBFAD3', '#0BAA65'],
  medium: ['#FEF79B', '#D4BD05'],
  hard: ['#FCC4AD', '#E83933'],
};

export const Container = styled.div`
  max-width: 500px;
  flex: 1;

  label {
    font-weight: 600;
    font-size: 20px;
    color: #343434;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Element = styled.li<ListProps>`
  width: 158px;
  height: 50px;
  border: 1px solid;
  border-radius: 10px;
  color: #343434;

  transition: 0.2s;

  ${props =>
    props.type === 'easy' &&
    css`
      background: ${liStyle.easy[0]};
      border-color: ${props.isSelected ? liStyle.easy[1] : liStyle.easy[0]};
      color: ${props.isSelected ? liStyle.easy[1] : '#343434'};
    `}

  ${props =>
    props.type === 'medium' &&
    css`
      background: ${liStyle.medium[0]};
      border-color: ${props.isSelected ? liStyle.medium[1] : liStyle.medium[0]};
      color: ${props.isSelected ? liStyle.medium[1] : '#343434'};
    `}

  ${props =>
    props.type === 'hard' &&
    css`
      background: ${liStyle.hard[0]};
      border-color: ${props.isSelected ? liStyle.hard[1] : liStyle.hard[0]};
      color: ${props.isSelected ? liStyle.hard[1] : '#343434'};
    `}

  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;


  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
