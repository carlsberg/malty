import { DefaultThemeV2 } from 'styled-components';
import { deepMerge } from './helpers';
import {
  borders,
  grid,
  opacity,
  primitiveBorderRadius,
  primitiveColors,
  semanticBorderRadius,
  semanticColors,
  shadows,
  sizes,
  typography
} from './tokens';
import { AdditionalPrimitives, SemanticOverrides } from './tokens/types';

interface CreateThemeParams {
  additionalPrimitives?: AdditionalPrimitives;
  semanticOverrides?: SemanticOverrides;
}

export default function createTheme({
  additionalPrimitives,
  semanticOverrides
}: CreateThemeParams = {}): DefaultThemeV2 {
  // COLORS
  const finalPrimitiveColors = { ...additionalPrimitives, ...primitiveColors };
  const finalSemanticColors = semanticOverrides?.colors
    ? deepMerge(semanticColors, semanticOverrides.colors)
    : semanticColors;

  // TYPOGRAPHY
  const finalTypography = semanticOverrides?.typography
    ? deepMerge(typography, semanticOverrides.typography)
    : typography;

  // BORDERS
  const finalBorders = semanticOverrides?.borders ? deepMerge(borders, semanticOverrides.borders) : borders;

  // BORDER RADIUS
  const finalSemanticBorderRadius = semanticOverrides?.borderRadius
    ? deepMerge(semanticBorderRadius, semanticOverrides.borderRadius)
    : semanticBorderRadius;

  const theme = {
    colorsV2: {
      ...finalPrimitiveColors,
      ...finalSemanticColors
    },
    sizesV2: { ...sizes },
    borderRadiusV2: {
      ...primitiveBorderRadius,
      ...finalSemanticBorderRadius
    },
    bordersV2: { ...finalBorders },
    opacityV2: { ...opacity },
    shadowsV2: { ...shadows },
    gridV2: { ...grid },
    typographyV2: { ...finalTypography }
  };

  return theme;
}
