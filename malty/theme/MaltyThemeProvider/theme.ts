/* eslint-disable @typescript-eslint/no-var-requires */
import { DefaultTheme } from 'styled-components';

const nonThemeColors = require('./colors.json');
const baltikaMarket = require('./themes/baltika.json');
const cadiMarket = require('./themes/cadi.json');
const carlsbergMarket = require('./themes/carlsberg.json');
const globalMarket = require('./themes/global.json');
const lbcMarket = require('./themes/lbc.json');

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
  ...nonThemeColors,
  font
};

const globalTheme = { ...defaultTheme };
const baltikaTheme = { ...defaultTheme };
const cadiTheme = { ...defaultTheme };
const carlsbergTheme = { ...defaultTheme };
const lbcTheme = { ...defaultTheme };

baltikaTheme.color.theme = { ...baltikaMarket.color.theme.baltika };
cadiTheme.color.theme = { ...cadiMarket.color.theme.cadi };
carlsbergTheme.color.theme = { ...carlsbergMarket.color.theme.carlsberg };
globalTheme.color.theme = { ...globalMarket.color.theme.global };
lbcTheme.color.theme = { ...lbcMarket.color.theme.lbc };

export { globalTheme, baltikaTheme, cadiTheme, carlsbergTheme, lbcTheme };
