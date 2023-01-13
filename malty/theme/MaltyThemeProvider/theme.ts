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
const nonThemeSizes = require('./sizes.json');
const nonThemeLayout = require('./layout.json');
const nonThemeBorders = require('./borders.json');
const nonThemeGradients = require('./gradients.json');
const nonThemeVariables = require('./variables.json');

const globalMarket = require('./themes/global.json');
const cadiMarket = require('./themes/cadi.json');
const carlsbergMarket = require('./themes/carlsberg.json');
const lbcMarket = require('./themes/lbc.json');

const defaultTheme: DefaultTheme = {
  colors: { ...nonThemeColors },
  typography: { ...nonThemeTypography },
  sizes: { ...nonThemeSizes },
  layout: { ...nonThemeLayout },
  borders: { ...nonThemeBorders },
  gradients: { ...nonThemeGradients },
  variables: { ...nonThemeVariables },
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

const globalTheme = JSON.parse(JSON.stringify(defaultTheme));
const cadiTheme = JSON.parse(JSON.stringify(defaultTheme));
const carlsbergTheme = JSON.parse(JSON.stringify(defaultTheme));
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

globalTheme['colors']['theme'] = { ...globalMarket.color.theme.global };
cadiTheme['colors']['theme'] = { ...cadiMarket.color.theme.cadi };
carlsbergTheme['colors']['theme'] = { ...carlsbergMarket.color.theme.carlsberg };
lbcTheme['colors']['theme'] = { ...lbcMarket.color.theme.lbc };

export { cadiTheme, carlsbergTheme, globalTheme, lbcTheme };
