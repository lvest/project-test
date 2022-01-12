import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main{
    margin: 8vh 0;
    background-color: aliceblue;
  }
`;

export default GlobalStyle;
