import { createGlobalStyle } from 'styled-components';

const TypographyProvider = createGlobalStyle`
  /* @font-face {
    font-family: 'Montserrat';
    src: url('https://cdn.carlsberggroup.com/fonts/montserrat/Montserrat-VariableFont_wght.ttf') format('ttf');
    font-display: 'swap';
  } */
  body {
    font-family: 'Montserrat', monospace;
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
