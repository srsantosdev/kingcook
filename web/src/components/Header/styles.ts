import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 56px;

  img {
    width: 215px;
  }

  a {
    color: #343434;
    font-size: 18px;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: color 0.2s;

    > svg {
      margin-right: 16px;
    }

    &:hover {
      color: #666250;
    }
  }
`;
