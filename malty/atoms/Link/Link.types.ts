export interface LinkProps {
  //text?: string | number;
  color?: LinkColor;
  //url?: string;
  linkStyle?: LinkStyle;
  //disabled?: boolean;
  //children?: string | JSX.Element;
  dataTestId?: string;
  //onClick?: () => void;
  //as?: React.ElementType;
  //to?: string;
}

type Merge<P1 = Record<string, never>, P2 = Record<string, never>> = Omit<P1, keyof P2> & P2;

type ForwardRefExoticComponent<E, OwnProps> = React.ForwardRefExoticComponent<
  Merge<E extends React.ElementType ? React.ComponentPropsWithRef<E> : never, OwnProps & { as?: E }>
>;

export interface ForwardRefComponent<
  IntrinsicElementString,
  OwnProps = Record<string, never>
  /**
   * Extends original type to ensure built in React types play nice
   * with polymorphic components still e.g. `React.ElementRef` etc.
   */
> extends ForwardRefExoticComponent<IntrinsicElementString, OwnProps> {
  /**
   * When `as` prop is passed, use this overload.
   * Merges original own props (without DOM props) and the inferred props
   * from `as` element with the own props taking precendence.
   *
   * We explicitly avoid `React.ElementType` and manually narrow the prop types
   * so that events are typed when using JSX.IntrinsicElements.
   */
  <As = IntrinsicElementString>(
    props: As extends ''
      ? { as: keyof JSX.IntrinsicElements }
      : As extends React.ComponentType<infer P>
      ? Merge<P, OwnProps & { as: As }>
      : As extends keyof JSX.IntrinsicElements
      ? Merge<JSX.IntrinsicElements[As], OwnProps & { as: As }>
      : never
  ): React.ReactElement | null;
}

export enum LinkColor {
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
  SuccessLight = 'success-light',
  Primary = 'Primary'
}

export enum LinkStyle {
  MediumBold = 'medium_bold',
  MediumDefault = 'medium_default',
  MediumSmallBold = 'medium-small_bold',
  MediumSmallDefault = 'medium-small_default',
  SmallBold = 'small_bold',
  SmallDefault = 'small_default',
  TinyBold = 'tiny_bold',
  TinyDefault = 'tiny_default',
  MicroBold = 'micro_bold',
  MicroDefault = 'micro_default'
}
