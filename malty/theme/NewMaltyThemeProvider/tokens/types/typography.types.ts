export type TypographyTokens = {
  body: {
    10: Omit<FontWeightTypes, 'light' | 'light-underline'>;
    12: Omit<FontWeightTypes, 'light' | 'light-underline'>;
    14: Omit<FontWeightTypes, 'light' | 'light-underline'>;
    16: Omit<FontWeightTypes, 'light' | 'light-underline'>;
  };
  headline: {
    20: Omit<FontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
    24: Omit<FontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
    32: Omit<FontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
    48: Omit<FontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
  };
  display: {
    56: Omit<FontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
    72: Omit<FontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
  };
};

type FontStyles = {
  fontFamily: string;
  fontWeight: number;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  paragraphSpacing: string;
  paragraphIndent: string;
  textCase: string;
  textDecoration: string;
};

type FontWeightTypes = {
  light: FontStyles;
  'light-underline': FontStyles;
  regular: FontStyles;
  'regular-underline': FontStyles;
  bold: FontStyles;
  'bold-underline': FontStyles;
  'semi-bold': FontStyles;
  'semi-bold-underline': FontStyles;
};

export type SemanticTypographyTokens = {
  body: {
    10: Omit<OverridableFontWeightTypes, 'light' | 'light-underline'>;
    12: Omit<OverridableFontWeightTypes, 'light' | 'light-underline'>;
    14: Omit<OverridableFontWeightTypes, 'light' | 'light-underline'>;
    16: Omit<OverridableFontWeightTypes, 'light' | 'light-underline'>;
  };
  headline: {
    20: Omit<OverridableFontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
    24: Omit<OverridableFontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
    32: Omit<OverridableFontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
    48: Omit<OverridableFontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
  };
  display: {
    56: Omit<OverridableFontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
    72: Omit<OverridableFontWeightTypes, 'semi-bold' | 'semi-bold-underline'>;
  };
};

type OverridableFontStyles = {
  fontFamily: string;
  fontWeight: number;
};

type OverridableFontWeightTypes = {
  light: OverridableFontStyles;
  'light-underline': OverridableFontStyles;
  regular: OverridableFontStyles;
  'regular-underline': OverridableFontStyles;
  bold: OverridableFontStyles;
  'bold-underline': OverridableFontStyles;
  'semi-bold': OverridableFontStyles;
  'semi-bold-underline': OverridableFontStyles;
};
