type Merge<P1 = Record<string, never>, P2 = Record<string, never>> = Omit<P1, keyof P2> & P2;

type PolymorphicBaseComponent<E, OwnProps> = React.Component<
  Merge<E extends React.ElementType ? React.ComponentPropsWithoutRef<E> : never, OwnProps & { as?: E }>
>;

export interface PolymorphicComponent<IntrinsicElementString, OwnProps = Record<string, never>>
  extends PolymorphicBaseComponent<IntrinsicElementString, OwnProps> {
  <As = IntrinsicElementString>(
    props: As extends ''
      ? { as: keyof JSX.IntrinsicElements } & OwnProps
      : As extends React.ComponentType<infer P>
      ? Merge<P, OwnProps & { as?: As }>
      : As extends keyof JSX.IntrinsicElements
      ? Merge<JSX.IntrinsicElements[As], OwnProps & { as?: As }>
      : never
  ): React.ReactElement | null;
}
