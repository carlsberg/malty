/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    sizes: SizesType;
    layout: LayoutType;
    borders: BordersType;
    gradients: GradientsType;
    typography: TypographyType;
    variables: VariablesType;
  }

  interface SizesType {
    '5xs': PropValue;
    '4xs': PropValue;
    '3xs': PropValue;
    '2xs': PropValue;
    xs: PropValue;
    s: PropValue;
    ms: PropValue;
    m: PropValue;
    l: PropValue;
    xl: PropValue;
    '2xl': PropValue;
    '3xl': PropValue;
    '4xl': PropValue;
    '5xl': PropValue;
  }

  interface LayoutType {
    xsmall: LayoutSizeType;
    small: LayoutSizeType;
    medium: LayoutSizeType;
    large: LayoutSizeType;
    xlarge: LayoutSizeType;
  }

  interface LayoutSizeType {
    'device-max-width'?: PropValue;
    'device-min-width'?: PropValue;
    'grid-width': PropValue;
    columns: PropValue;
    gutter: PropValue;
    margin: PropValue;
  }

  interface BordersType {
    'border-1px--solid': {
      'border-width': PropValue;
      'border-style': PropValue;
    };
    'border-2px--solid': {
      'border-width': PropValue;
      'border-style': PropValue;
    };
    'border-3px--solid': {
      'border-width': PropValue;
      'border-style': PropValue;
    };
    'border-1px--dotted': {
      'border-width': PropValue;
      'border-style': PropValue;
    };
  }

  interface GradientsType {
    fade: {
      'bottom-to-top': {
        'digital-black': PropValue;
        white: PropValue;
      };
      'left-to-right': {
        'digital-black': PropValue;
        white: PropValue;
      };
      'right-to-left': {
        'digital-black': PropValue;
        white: PropValue;
      };
      'top-to-bottom': {
        'digital-black': PropValue;
        white: PropValue;
      };
    };
  }

  interface ColorsType {
    theme: {
      themePrimary: PropValue;
      themeSecondary: PropValue;
      themeTertiary: PropValue;
    };
    colours: {
      default: {
        'digital-black': PropValue;
        transparent: PropValue;
        white: PropValue;
      };
      information: {
        archive: PropValue;
        close: PropValue;
        disable: PropValue;
        hold: PropValue;
        indirect: PropValue;
        live: PropValue;
        multiple: PropValue;
        new: PropValue;
        parked: PropValue;
        prospect: PropValue;
        update: PropValue;
        wholesaler: PropValue;
      };
      overlay: {
        'digital-black': {
          '5': PropValue;
          '10': PropValue;
          '25': PropValue;
          '50': PropValue;
          '75': PropValue;
          '90': PropValue;
        };
        white: {
          '5': PropValue;
          '10': PropValue;
          '25': PropValue;
          '50': PropValue;
          '75': PropValue;
          '90': PropValue;
        };
      };
      support: {
        '20': PropValue;
        '40': PropValue;
        '60': PropValue;
        '80': PropValue;
        '100': PropValue;
      };
      system: {
        'alert-light': PropValue;
        'alert-strong': PropValue;
        'disable-light-theme': PropValue;
        'disable-dark-theme': PropValue;
        fail: PropValue;
        'fail-light': PropValue;
        'notification-light': PropValue;
        'notification-strong': PropValue;
        success: PropValue;
        'success-light': PropValue;
      };
    };
    'headline-colours': {
      'digital-black': PropValue;
      white: PropValue;
    };
    'text-colours': {
      'digital-black': PropValue;
      white: PropValue;
      '20': PropValue;
      '40': PropValue;
      '60': PropValue;
      '80': PropValue;
      '100': PropValue;
      'alert-light': PropValue;
      'alert-strong': PropValue;
      'disable-light-theme': PropValue;
      'disable-dark-theme': PropValue;
      fail: PropValue;
      'fail-light': PropValue;
      'notification-light': PropValue;
      'notification-strong': PropValue;
      success: PropValue;
      'success-light': PropValue;
    };
  }

  interface TypographyType {
    desktop: TypographyObjectType;
    tablet: TypographyObjectType;
    mobile: TypographyObjectType;
  }

  interface TypographyObjectType {
    headline: TypographyHeadlineType;
    text: TypographyTextType;
  }

  interface TypographyHeadlineType {
    display: TypographyStyleType;
    banner: TypographyStyleType;
    huge: TypographyStyleType;
    big: TypographyStyleType;
    large: TypographyStyleType;
    'medium-large': TypographyStyleType;
    medium: TypographyStyleType;
  }

  interface TypographyTextType {
    medium_bold: TypographyStyleType;
    'medium_bold--underline': TypographyStyleType;
    medium_default: TypographyStyleType;
    'medium_default--underline': TypographyStyleType;
    'medium-small_bold': TypographyStyleType;
    'medium-small_bold--underline': TypographyStyleType;
    'medium-small_default': TypographyStyleType;
    'medium-small_default--underline': TypographyStyleType;
    small_bold: TypographyStyleType;
    'small_bold--underline': TypographyStyleType;
    small_default: TypographyStyleType;
    'small_default--underline': TypographyStyleType;
    tiny_bold: TypographyStyleType;
    tiny_default: TypographyStyleType;
    micro_bold: TypographyStyleType;
    micro_default: TypographyStyleType;
  }

  interface TypographyStyleType {
    'font-family': PropValue;
    'font-size': PropValue;
    'letter-spacing': PropValue;
    'line-height': PropValue;
    'font-weight': PropValue;
    'text-transform'?: PropValue;
    'text-decoration'?: PropValue;
  }

  interface VariablesType {
    global: GlobalTypes;
  }

  interface GlobalTypes {
    'text-alignments': TypographyAlignment;
  }

  interface TypographyAlignment {
    left: PropValue;
    center: PropValue;
    right: PropValue;
  }

  interface PropValue {
    value: string;
  }

  interface Theme {
    themePrimary: PropValue;
    themeSecondary: PropValue;
    themeTertiary: PropValue;
  }
}
