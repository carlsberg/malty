import { DefaultTheme } from 'styled-components';
import genericColors from './colors.json';
import baltika from './themes/baltika.json';
import cadi from './themes/cadi.json';
import carlsberg from './themes/carlsberg.json';
import global from './themes/global.json';
import lbc from './themes/lbc.json';

const font = {
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '24px'
  },
  fontFamily: {
    headings: `'Montserrat', Arial, sans-serif`,
    text: `'Montserrat', Arial, sans-serif`
  }
};
const defaultTheme: DefaultTheme = {
  ...genericColors,
  font
};

const globalTheme = { color: { theme: {} }, ...defaultTheme };
const baltikaTheme = { color: { theme: {} }, ...defaultTheme };
const cadiTheme = { color: { theme: {} }, ...defaultTheme };
const carlsbergTheme = { color: { theme: {} }, ...defaultTheme };
const lbcTheme = { color: { theme: {} }, ...defaultTheme };

globalTheme.color.theme = { ...global.color.theme.global };
baltikaTheme.color.theme = { ...baltika.color.theme.baltika };
cadiTheme.color.theme = { ...cadi.color.theme.cadi };
carlsbergTheme.color.theme = { ...carlsberg.color.theme.carlsberg };
lbcTheme.color.theme = { ...lbc.color.theme.lbc };

export { globalTheme, baltikaTheme, cadiTheme, carlsbergTheme, lbcTheme };
