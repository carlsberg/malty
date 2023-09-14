import React, { ForwardedRef, forwardRef, RefObject, useImperativeHandle, useRef } from 'react';
import { StyledAnchor } from './Link.styled';
import { ForwardRefComponent as PolymorphicForwardRefComponent, LinkProps } from './Link.types';

/*export const Link = ({
  text,
  disabled = false,
  url,
  children,
  dataTestId,
  color = LinkColor.DigitalBlack,
  linkStyle = LinkStyle.MediumDefault,
  onClick,
  as = 'a',
  to
}: LinkProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledAnchor
      as={as}
      to={to}
      onClick={onClick}
      data-testid={dataTestId}
      disabled={disabled}
      theme={theme}
      target="_blank"
      href={url}
      rel="noreferrer"
      color={color}
      linkStyle={linkStyle}
    >
      {text || children}
    </StyledAnchor>
  );
};*/
export function useRefObjectAsForwardedRef<T>(forwardedRef: ForwardedRef<T>, refObject: RefObject<T>): void {
  useImperativeHandle<T | null, T | null>(forwardedRef, () => refObject.current);
}

export const Link = forwardRef(({ as = 'a', ...props }, forwardedRef) => {
  const innerRef = useRef<HTMLAnchorElement>(null);
  useRefObjectAsForwardedRef(forwardedRef, innerRef);

  return <StyledAnchor as={as} {...props} ref={innerRef} />;
}) as PolymorphicForwardRefComponent<'a', LinkProps>;

Link.displayName = 'Link';
