import { createGlobalStyle } from 'styled-components';

const TypographyProvider = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('https://cdn.carlsberggroup.com/fonts/montserrat/Montserrat-VariableFont_wght.ttf');
    font-display: 'swap';
  }
`;

export { TypographyProvider };
