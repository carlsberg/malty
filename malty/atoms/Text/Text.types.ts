export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  textStyle: TextStyle;
  align?: TextAlign;
  color?: TextColor;
  italic?: boolean;
  as?: React.ElementType;
  ellipsis?: boolean;
  width?: string;
  children: string | JSX.Element;
  className?: string;
  dataQaId?: string;
}

export enum TextStyle {
  MediumBold = 'medium_bold',
  MediumBoldUnderline = 'medium_bold--underline',
  MediumDefault = 'medium_default',
  MediumDefaultUnderline = 'medium_default--underline',
  MediumSmallBold = 'medium-small_bold',
  MediumSmallBoldUnderline = 'medium-small_bold--underline',
  MediumSmallDefault = 'medium-small_default',
  MediumSmallDefaultUnderline = 'medium-small_default--underline',
  SmallBold = 'small_bold',
  SmallBoldUnderline = 'small_bold--underline',
  SmallDefault = 'small_default',
  SmallDefaultUnderline = 'small_default--underline',
  TinyBold = 'tiny_bold',
  TinyDefault = 'tiny_default',
  MicroBold = 'micro_bold',
  MicroDefault = 'micro_default'
}
export enum TextAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}
export enum TextColor {
  DigitalBlack = 'digital-black',
  White = 'white',
  Support20 = '20',
  Support40 = '40',
  Support60 = '60',
  Support80 = '80',
  Support100 = '100',
  AlertLight = 'alert-light',
  AlertStrong = 'alert-strong',
  DisableLightTheme = 'disable-light-theme',
  DisableDarkTheme = 'disable-dark-theme',
  Fail = 'fail',
  FailLight = 'fail-light',
  NotificationLight = 'notification-light',
  NotificationStrong = 'notification-strong',
  Success = 'success',
  SuccessLight = 'success-light'
}
