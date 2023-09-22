import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { PolymorphicProps } from '@carlsberggroup/malty.utils.types';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
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
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledAnchor
      as={Component}
      disabled={disabled}
      color={color}
      linkStyle={linkStyle}
      data-testid={dataTestId}
      theme={theme}
      {...props}
    >
      {children}
    </StyledAnchor>
  );
};
