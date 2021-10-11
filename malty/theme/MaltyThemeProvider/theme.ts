import { DefaultTheme } from 'styled-components';

/*
The following requires() are not the proper solution
for this, but unfortunately when imports are used instead
(proper), there is an error that the files are not found.
This stems from the JSON file format, but all config around
consuming JSON files was implemented, and yet the issue
remains.
TODO: Change require() to import statements
*/

/* eslint-disable @typescript-eslint/no-var-requires */

const nonThemeColors = require('./colors.json');
const nonThemeTypography = require('./typography.json');
const nonThemeVariables = require('./variables.json');
const baltikaMarket = require('./themes/baltika.json');
const cadiMarket = require('./themes/cadi.json');
const carlsbergMarket = require('./themes/carlsberg.json');
const globalMarket = require('./themes/global.json');
const lbcMarket = require('./themes/lbc.json');

const defaultTheme: DefaultTheme = {
  ...nonThemeColors,
  ...nonThemeVariables,
  ...nonThemeTypography
};

/*
  Cloning the defaultTheme to the market/brand themes was
  resulting in all themes keeping a reference to the
  defaultTheme, and this meant that every change to a
  market/brand theme was bubbling up to the defaultTheme.
  In other words, the last theme being modified was overwriting
  not only every other market/brand theme, but also the defaultTheme.
  To solve this issue we are doing a JSON Deep Clone, as explained
  here: https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/#_3-using-json
  This is not ideal, but it doesn't really present any real
  technical debt, or concerns. It should, nonetheless, be optimized
  to a more efficient way of doing this.
*/

const baltikaTheme = JSON.parse(JSON.stringify(defaultTheme));
const cadiTheme = JSON.parse(JSON.stringify(defaultTheme));
const carlsbergTheme = JSON.parse(JSON.stringify(defaultTheme));
const globalTheme = JSON.parse(JSON.stringify(defaultTheme));
const lbcTheme = JSON.parse(JSON.stringify(defaultTheme));

/*
  The proper way to assign the theme colors, below, would be
  to use JSON dot notation. But unfortunately this generates
  a TS2339 error claiming not to find the path.
  When changed to old-school square brackets, it just magically
  works. We should look into the types here, as I'm suspect the
  the issue is there. But I couldn't really find the culprit.
  TODO: Test dot notation after the above issue was resolved,
  this may not be an issue afterall.
*/

/* eslint-disable dot-notation */

baltikaTheme['color']['theme'] = { ...baltikaMarket.color.theme.baltika };
cadiTheme['color']['theme'] = { ...cadiMarket.color.theme.cadi };
carlsbergTheme['color']['theme'] = { ...carlsbergMarket.color.theme.carlsberg };
globalTheme['color']['theme'] = { ...globalMarket.color.theme.global };
lbcTheme['color']['theme'] = { ...lbcMarket.color.theme.lbc };

export { baltikaTheme, cadiTheme, carlsbergTheme, globalTheme, lbcTheme };
