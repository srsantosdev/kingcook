import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F0F0F0;
    color: #343434;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Assistant', sans-serif;
    font-size: 16px;
  }

  #root {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
  }

  button {
    cursor: pointer;
  }
`;
