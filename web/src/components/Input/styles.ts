import styled, { css } from 'styled-components';

interface InputProps {
  isErrored?: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: 500px;
  flex: 1;

  label {
    font-weight: 600;
    font-size: 20px;
    color: #343434;
    margin-bottom: 8px;
  }

  input {
    height: 50px;
    border: 2px solid #f8f8f8;

    ${props =>
      props.isErrored &&
      css`
        border-color: #c52943;
      `}

    font-weight: 600;
    font-size: 16px;
    color: #343434;
    margin-bottom: 8px;

    padding: 0 16px;

    background: #f8f8f8;
    border-radius: 10px;
  }
`;
