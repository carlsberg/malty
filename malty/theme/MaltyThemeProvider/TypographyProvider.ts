import { createGlobalStyle } from 'styled-components';

const TypographyProvider = createGlobalStyle`

  @import url('https://cdn.carlsberggroup.com/fonts/montserrat/Montserrat-VariableFont_wght.ttf');

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
