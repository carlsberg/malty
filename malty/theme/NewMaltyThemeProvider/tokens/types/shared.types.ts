import { PrimitiveBorderRadiusTokens, SemanticBorderRadiusTokens } from './borderRadius.types';
import { SemanticBorderTokens } from './borders.types';
import { PrimitiveColorsTokens, SemanticColorsTokens } from './colors.types';
import { SemanticTypographyTokens } from './typography.types';

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer R)[] ? DeepPartial<R>[] : T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type MakeExtendable<T extends object> = {
  [K in keyof T]: T[K] extends object ? MakeExtendable<T[K]> : T[K];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & { [k: string]: any };

export type SemanticTokens = {
  colors: SemanticColorsTokens;
  borderRadius: SemanticBorderRadiusTokens;
  borders: SemanticBorderTokens;
  typography: SemanticTypographyTokens;
};

export type ColorTokens = PrimitiveColorsTokens & SemanticColorsTokens;
export type BorderRadiusTokens = PrimitiveBorderRadiusTokens & SemanticBorderRadiusTokens;
export type SemanticOverrides = DeepPartial<SemanticTokens>;
export type AdditionalPrimitives = DeepPartial<MakeExtendable<PrimitiveColorsTokens>>;
