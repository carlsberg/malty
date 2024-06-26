import { PolymorphicProps } from '@carlsberggbs/malty.utils.types';
import React from 'react';
import { StyledAnchor } from './Link.styled';
import { LinkColor, LinkProps, LinkStyle } from './Link.types';

export const Link = <Component extends React.ElementType = 'a'>({
  as,
  disabled = false,
  color = LinkColor.DigitalBlack,
  linkStyle = LinkStyle.MediumDefault,
  dataTestId,
  children,
  ...props
}: PolymorphicProps<Component, LinkProps<Component>>) => {
  const Component = as || 'a';

  return (
    <StyledAnchor
      as={Component}
      $disabled={disabled}
      $color={color}
      $linkStyle={linkStyle}
      data-testid={dataTestId}
      {...props}
    >
      {children}
    </StyledAnchor>
  );
};
