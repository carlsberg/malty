import { DefaultTheme } from 'styled-components';
import maltyColors from './themes2/malty2.json';
import primitiveColors from './themes2/primitiveColors2.json';

/* eslint-disable @typescript-eslint/no-var-requires */
const nonThemeTypography = require('./typography.json');
const nonThemeSizes = require('./sizes.json');
const nonThemeLayout = require('./layout.json');
const nonThemeBorders = require('./borders.json');
const nonThemeGradients = require('./gradients.json');
const nonThemeVariables = require('./variables.json');
const nonThemeShadows = require('./shadows.json');

// TODO: move this into a more generic helper, inside MAltyThmeProvider folder
export const deepMergeObjects = (...objects: unknown[]) => {
  const deepCopyObjects = objects.map((object) => JSON.parse(JSON.stringify(object)));
  return deepCopyObjects.reduce((merged, current) => ({ ...merged, ...current }), {});
};

interface CreateThemeParams {
  colors?: unknown;
  sizes?: unknown;
  typography?: unknown;
}

export function createTheme({ colors = {} }: CreateThemeParams): DefaultTheme {
  const semanticColors = deepMergeObjects(maltyColors, colors);

  const themeColors = { ...semanticColors, ...primitiveColors };

  return {
    colors: { ...themeColors },
    typography: { ...nonThemeTypography },
    sizes: { ...nonThemeSizes },
    layout: { ...nonThemeLayout },
    borders: { ...nonThemeBorders },
    gradients: { ...nonThemeGradients },
    variables: { ...nonThemeVariables },
    shadows: { ...nonThemeShadows }
  };
}
