import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Colors;
    font: Font;
  }

  interface Font {
    fontSizes: FontSizes;
    fontFamily: FontFamily;
  }

  interface FontSizes {
    small: string;
    medium: string;
    large: string;
  }
  interface FontFamily {
    headings: string;
    text: string;
  }

  interface Colors {
    theme?: Theme;
    button: ButtonColors;
    data: DataColors;
    default: ColorValue;
    form: FormColors;
    gradient: GradientColors;
    information: InformationColors;
    overlay: OverlayColors;
    support: SupportColors;
    system: SystemColors;
    transparent: ColorValue;
    white: ColorValue;
    black: ColorValue;
  }

  interface ColorValue {
    value: string;
  }

  interface OpacityPair {
    default: ColorValue;
    white: ColorValue;
  }

  interface Theme {
    themePrimary: ColorValue;
    themeSecondary: ColorValue;
    themeTertiary: ColorValue;
  }

  interface ButtonColors {
    primaryDefault: ColorValue;
    primaryDisable: ColorValue;
    primaryHover: ColorValue;
    primaryNegativeDefault: ColorValue;
    primaryNegativeHover: ColorValue;
  }

  interface DataColors {
    lightGreen1: ColorValue;
    trueBlue2: ColorValue;
    naplesYellow3: ColorValue;
    vividRed4: ColorValue;
    skyBlue5: ColorValue;
    goldYellow6: ColorValue;
    carlsbergGreen7: ColorValue;
    apricot8: ColorValue;
  }

  interface FormColors {
    calendarAvailable: ColorValue;
    calendarSelect: ColorValue;
    calendarSpecial: ColorValue;
    formSelect: ColorValue;
  }

  interface GradientColors {
    themePrimaryHorizontal: ColorValue;
    themePrimaryVertical: ColorValue;
    transparent: ColorValue;
    whiteHorizontal: ColorValue;
    whiteVertical: ColorValue;
  }

  interface InformationColors {
    active: ColorValue;
    archive: ColorValue;
    closed: ColorValue;
    disable: ColorValue;
    hold: ColorValue;
    indirect: ColorValue;
    live: ColorValue;
    multiple: ColorValue;
    new: ColorValue;
    parked: ColorValue;
    prospect: ColorValue;
    wholesaler: ColorValue;
  }

  interface OverlayColors {
    opacity10: OpacityPair;
    opacity50: OpacityPair;
    opacity75: OpacityPair;
    opacity90: OpacityPair;
    transparent: ColorValue;
  }

  interface SupportColors {
    support20: ColorValue;
    support40: ColorValue;
    support60: ColorValue;
    support80: ColorValue;
  }

  interface SystemColors {
    alertBackground: ColorValue;
    alertStrong: ColorValue;
    disableBackground: ColorValue;
    disableStrong: ColorValue;
    failBackground: ColorValue;
    failStrong: ColorValue;
    notificationBackground: ColorValue;
    notificationStrong: ColorValue;
    notificationTest: ColorValue;
    successBackground: ColorValue;
    successStrong: ColorValue;
  }
}
