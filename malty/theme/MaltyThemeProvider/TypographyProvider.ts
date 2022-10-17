import { createGlobalStyle } from 'styled-components';

const TypographyProvider = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

  @font-face {
    font-family: 'Montserrat';
    font-display: swap;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    line-height: 1;
    width: auto;
  }
`;

export { TypographyProvider };
