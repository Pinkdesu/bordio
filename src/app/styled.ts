import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    height: 1px;
    min-height: 100vh;
  }

  #root {
    display: flex;
    height: 100%;
  }

  input {
    font-family: inherit;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

const MainContent = styled.main`
  flex: 1 1;
`;

export { GlobalStyles, MainContent };
