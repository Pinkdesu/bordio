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
    height: 100%;
  }

  a {
    text-decoration: none;
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
  margin-left: ${({ theme }) => theme.sizis.menu};
`;

export { GlobalStyles, MainContent };
