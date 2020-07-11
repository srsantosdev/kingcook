import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  border-radius: 15px;
  margin-bottom: 32px;

  padding: 16px;

  div.group {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    margin-bottom: 32px;

    div.field {
      width: 500px;

      button {
        width: 500px;
        height: 50px;
        border: 0;
        background: #c52943;
        border-radius: 10px;
        margin-top: 16px;

        font-weight: bold;
        font-size: 20px;
        color: #ffffff;

        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, '#c52943')};
        }
      }
    }
  }
`;

export const Lists = styled.div`
  h3 {
    font-weight: 700;
    font-size: 24px;
    color: #c52943;

    margin-bottom: 16px;
  }

  ul,
  ol {
    margin-left: 16px;
    margin-top: 24px;

    li {
      margin-bottom: 8px;
      font-weight: normal;
      font-size: 16px;
      color: #343434;
    }
  }

  ul {
    margin-bottom: 32px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 250px;
    height: 50px;
    background: #c52943;
    border-radius: 15px;
    border: 0;

    font-weight: 600;
    font-size: 20px;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#c52943')};
    }

    > svg {
      margin-right: 16px;
    }
  }
`;
