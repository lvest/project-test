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

  input{
    width: 80vw;
    height: 7vh;
    padding: 1vh;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 10px;
  }
`;

export default GlobalStyle;
