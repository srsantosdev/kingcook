import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 556px;
  background: #fff;

  border-radius: 15px;

  margin-bottom: 32px;
`;

export const Recipe = styled.div`
  margin: 8px 24px;
  flex: 1;
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: bold;
      font-size: 30px;
      color: #c52943;
    }
  }

  section {
    h2 {
      font-weight: 600;
      font-size: 20px;
      color: #a51c3f;
      margin-top: 32px;
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
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 556px;
  border-radius: 15px;
`;
