import {
  getDefaultPrimitiveTokens,
  getDefaultSemanticTokens,
  getGridTokens,
  getPrimitiveBorderTokens,
  getPrimitiveColors,
  getSemanticColors,
  getShadowTokens,
  getTypographyTokens
} from './helpers';
import {
  GridTokens,
  OpacityTokens,
  PrimitiveBorderRadiusTokens,
  PrimitiveBorderTokens,
  PrimitiveColorsTokens,
  SemanticBorderRadiusTokens,
  SemanticColorsTokens,
  ShadowTokens,
  SizeTokens,
  TypographyTokens
} from './types';

const primitiveColors = getPrimitiveColors() as PrimitiveColorsTokens;
const semanticColors = getSemanticColors(primitiveColors) as SemanticColorsTokens;
const typography = getTypographyTokens() as TypographyTokens;
const sizes = getDefaultPrimitiveTokens('sizes') as SizeTokens;
const primitiveBorderRadius = getDefaultPrimitiveTokens('border radius') as PrimitiveBorderRadiusTokens;
const semanticBorderRadius = getDefaultSemanticTokens(
  'border radius',
  primitiveBorderRadius
) as SemanticBorderRadiusTokens;
const opacity = getDefaultPrimitiveTokens('opacity') as OpacityTokens;
const shadows = getShadowTokens() as ShadowTokens;
const grid = getGridTokens() as GridTokens;
const borders = getPrimitiveBorderTokens(primitiveColors) as PrimitiveBorderTokens;

export {
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
};
