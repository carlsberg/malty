import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Colors;
    typography: TypographyTypes;
    variables: VariablesType;
  }

  interface GlobalTypes {
    breakpoints: BreakPointsType;
  }

  interface VariablesType {
    alert: AlertType;
    button: ButtonType;
    checkbox: CheckboxType;
    icon: IconType;
    input: InputType;
    pill: PillType;
    progressBar: ProgressBarType;
    tooltip: TooltipType;
    radio: RadioType;
    select: SelectType;
    codeInput: CodeInputType;
    loading: LoadingType;
    container: ContainerType;
    image: ImageType;
    global: GlobalTypes;
  }

  interface BreakPointsType {
    xsmall: PropValue;
    small: PropValue;
    medium: PropValue;
    large: PropValue;
    xlarge: PropValue;
  }

  interface ImageType {
    border: PropValue;
  }

  interface RadioType {
    paddingLeft: PropValue;
    size: PropValue;
    inputSelected: PropValue;
    borderRadius: PropValue;
  }
  interface AlertType {
    size: AlertHeightSize;
  }

  interface AlertHeightSize {
    small: PropValue;
    medium: PropValue;
  }

  interface ButtonType {
    icon: ButtonIconType;
    horizontalPadding: PropValue;
    size: ButtonSize;
  }

  interface ButtonSize {
    small: PropValue;
    medium: PropValue;
    large: PropValue;
    xlarge: PropValue;
  }

  interface ButtonIconType {
    size: ButtonIconSizeType;
    margin: PropValue;
  }

  interface ButtonIconSizeType {
    medium: PropValue;
    small: PropValue;
  }

  interface CheckboxType {
    size: PropValue;
    label: CheckboxLabelType;
    border: PropValue;
    borderRadius: PropValue;
    error: CheckboxErrorType;
  }

  interface CheckboxLabelType {
    leftPadding: PropValue;
  }

  interface CheckboxErrorType {
    padding: PropValue;
  }

  interface IconType {
    size: IconSizeType;
  }

  interface InputType {
    size: InputSizeType;
    padding: PropValue;
    largePadding: PropValue;
    leftPadding: PropValue;
    iconPadding: PropValue;
    label: InputLabelType;
    number: InputNumberType;
    select: InputSelectType;
  }

  interface PillType {
    size: PillSizeType;
    padding: PillSizeType;
    icon: PillIconType;
  }

  interface PillIconType {
    size: PillSizeType;
  }

  interface PillSizeType {
    xsmall: PropValue;
    small: PropValue;
    medium: PropValue;
    large: PropValue;
  }

  interface ProgressBarType {
    bar: ProgressBarBarType;
    text: ProgressBarTextType;
  }

  interface ProgressBarBarType {
    height: PropValue;
    borderRadius: PropValue;
  }

  interface ProgressBarTextType {
    marginLeft: PropValue;
    fontSize: PropValue;
    lineHeight: PropValue;
    marginTop: PropValue;
  }

  interface TooltipType {
    arrowSize: PropValue;
    horizontalPosTop: PropValue;
    horizontalPosTopTranslateY: PropValue;
    verticalPosLeft: PropValue;
    verticalPosLeftTranslateX: PropValue;
    padding: PropValue;
    minWidth: PropValue;
    boxShadow: PropValue;
    topPosition: TooltipPositionTopType;
    bottomPosition: TooltipPositionBottomType;
    rightPosition: TooltipPositionRightType;
    leftPosition: TooltipPositionLeftType;
  }

  interface TooltipPositionTopType {
    bottom: PropValue;
    borderWidth: PropValue;
  }

  interface TooltipPositionBottomType {
    top: PropValue;
    borderWidth: PropValue;
  }

  interface TooltipPositionRightType {
    left: PropValue;
    borderWidth: PropValue;
  }

  interface TooltipPositionLeftType {
    right: PropValue;
    borderWidth: PropValue;
  }
  interface SelectType {
    size: SelectSizeType;
  }
  interface SelectSizeType {
    medium: PropValue;
    large: PropValue;
  }

  interface CodeInputType {
    size: CodeInputSizeType;
    paddingBottom: PropValue;
    paddingTop: PropValue;
    icontTop: PropValue;
    iconTopTransform: PropValue;
    placeholderOpacity: PropValue;
    iconLargePadding: PropValue;
    iconSmallPadding: PropValue;
  }

  interface CodeInputSizeType {
    large: PropValue;
    medium: PropValue;
  }

  interface LoadingType {
    size: LoadingSizeType;
    gap: PropValue;
    padding: PropValue;
    color: PropValue;
    letterSpacing: PropValue;
    lineHeight: PropValue;
  }

  interface LoadingSizeType {
    small: PropValue;
    medium: PropValue;
    large: PropValue;
  }

  interface ContainerType {
    size: ContainerSizeType;
  }

  interface ContainerSizeType {
    none: PropValue;
    micro: PropValue;
    tiny: PropValue;
    xsmall: PropValue;
    small: PropValue;
    medium: PropValue;
    large: PropValue;
    xlarge: PropValue;
  }

  interface InputNumberType {
    width: PropValue;
  }

  interface InputSelectType {
    width: PropValue;
  }

  interface InputLabelType {
    bottomPadding: PropValue;
  }

  interface InputSizeType {
    medium: PropValue;
    large: PropValue;
  }

  interface IconSizeType {
    small: PropValue;
    medium: PropValue;
    large: PropValue;
  }
  interface TypographyTypes {
    global: GlobalTypography;
    headline: HeadlineTypographySizes;
    information: InformationTypographySizes;
    text: TextTypographySizes;
  }

  interface GlobalTypography {
    'font-family': PropValue;
  }

  interface HeadlineTypographySizes {
    'font-family': PropValue;
    display: TypographySize;
    xlarge: TypographySize;
    hero: TypographySize;
    huge: TypographySize;
    large: TypographySize;
    medium: TypographySize;
    small: TypographySize;
  }

  interface InformationTypographySizes {
    'font-family': PropValue;
    micro: TypographySize;
    small: TypographySize;
    tiny: TypographySize;
  }

  interface TextTypographySizes {
    'font-family': PropValue;
    medium: TypographySize;
    'medium-small': TypographySize;
    small: TypographySize;
  }

  interface TypographySize {
    'font-size': PropValue;
    'line-height': PropValue;
    'mobile-font-size'?: PropValue;
  }

  interface TypographyAlignment {
    left: boolean;
    center: boolean;
    right: boolean;
  }

  interface Colors {
    theme: Theme;
    button: ButtonColors;
    data: DataColors;
    default: PropValue;
    form: FormColors;
    gradient: GradientColors;
    information: InformationColors;
    overlay: OverlayColors;
    support: SupportColors;
    system: SystemColors;
    transparent: PropValue;
    white: PropValue;
    black: PropValue;
  }

  interface PropValue {
    value: string;
  }

  interface OpacityPair {
    default: PropValue;
    white: PropValue;
  }

  interface Theme {
    themePrimary: PropValue;
    themeSecondary: PropValue;
    themeTertiary: PropValue;
  }

  interface ButtonColors {
    primaryDefault: PropValue;
    primaryDisable: PropValue;
    primaryHover: PropValue;
    primaryNegativeDefault: PropValue;
    primaryNegativeHover: PropValue;
  }

  interface DataColors {
    lightGreen1: PropValue;
    trueBlue2: PropValue;
    naplesYellow3: PropValue;
    vividRed4: PropValue;
    skyBlue5: PropValue;
    goldYellow6: PropValue;
    carlsbergGreen7: PropValue;
    apricot8: PropValue;
  }

  interface FormColors {
    calendarAvailable: PropValue;
    calendarSelect: PropValue;
    calendarSpecial: PropValue;
    formSelect: PropValue;
  }

  interface GradientColors {
    themePrimaryHorizontal: PropValue;
    themePrimaryVertical: PropValue;
    transparent: PropValue;
    whiteHorizontal: PropValue;
    whiteVertical: PropValue;
  }

  interface InformationColors {
    active: PropValue;
    archive: PropValue;
    closed: PropValue;
    disable: PropValue;
    hold: PropValue;
    indirect: PropValue;
    live: PropValue;
    multiple: PropValue;
    new: PropValue;
    parked: PropValue;
    prospect: PropValue;
    wholesaler: PropValue;
  }

  interface OverlayColors {
    opacity10: OpacityPair;
    opacity50: OpacityPair;
    opacity75: OpacityPair;
    opacity90: OpacityPair;
    transparent: PropValue;
  }

  interface SupportColors {
    support20: PropValue;
    support40: PropValue;
    support60: PropValue;
    support80: PropValue;
  }

  interface SystemColors {
    alertBackground: PropValue;
    alertStrong: PropValue;
    disableBackground: PropValue;
    disableStrong: PropValue;
    failBackground: PropValue;
    failStrong: PropValue;
    notificationBackground: PropValue;
    notificationStrong: PropValue;
    notificationTest: PropValue;
    successBackground: PropValue;
    successStrong: PropValue;
  }
}
