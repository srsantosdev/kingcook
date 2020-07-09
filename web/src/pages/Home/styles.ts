import styled from 'styled-components';
import { shade } from 'polished';

import illustration from '../../assets/illustration.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
  }

  button {
    width: 326px;
    height: 60px;
    background: #c52943;
    border: 0;
    border-radius: 15px;
    margin-top: 72px;

    font-weight: bold;
    font-size: 20px;
    line-height: 26px;

    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 16px;
    transition: 0.5s;

    &:hover {
      background-color: ${shade(0.1, '#c52943')};
      transform: translateX(5px);
    }
  }

  a {
    color: #343434;
    font-size: 18px;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;

    transition: color 0.2s;

    > svg {
      margin-right: 16px;
    }

    &:hover {
      color: #666250;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${illustration}) no-repeat right;
`;
