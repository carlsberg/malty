import { DefaultTheme } from 'styled-components';

/* 
  The following requires() are not the proper solution
  for this, but unfortunately when imports are used instead
  (proper), there is an error that the files are not found.
  This stems from the JSON file format, but all config around
  consuming JSON files was implemented, and yet the issue
  remains.
*/

/* eslint-disable @typescript-eslint/no-var-requires */

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

/*
  The proper way to assign the theme colors, below, would be
  to use JSON dot notation. But unfortunately this generates
  a TS2339 error claiming not to find the path.
  When changed to old-school square brackets, it just magically
  works. We should look into the types here, as I'm suspect the
  the issue is there. But I couldn't really find the culprit.
*/

/* eslint-disable dot-notation */

baltikaTheme['color']['theme'] = { ...baltikaMarket.color.theme.baltika };
cadiTheme['color']['theme'] = { ...cadiMarket.color.theme.cadi };
carlsbergTheme['color']['theme'] = { ...carlsbergMarket.color.theme.carlsberg };
globalTheme['color']['theme'] = { ...globalMarket.color.theme.global };
lbcTheme['color']['theme'] = { ...lbcMarket.color.theme.lbc };

export { globalTheme, baltikaTheme, cadiTheme, carlsbergTheme, lbcTheme };
