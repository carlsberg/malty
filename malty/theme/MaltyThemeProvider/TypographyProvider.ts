import { createGlobalStyle } from 'styled-components';

const TypographyProvider = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('https://cdn.carlsberggroup.com/fonts/montserrat/Montserrat-VF.woff2') format('woff2'),
         url('https://cdn.carlsberggroup.com/fonts/montserrat/Montserrat-VariableFont_wght.ttf') format('truetype');
    font-display: 'swap';
    font-weight: 400 900;
    font-stretch: 100%;
  }
`;

export { TypographyProvider };
