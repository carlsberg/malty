import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { PolymorphicComponent } from '@carlsberggroup/malty.utils.types';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledAnchor } from './Link.styled';
import { LinkColor, LinkProps, LinkStyle } from './Link.types';

export const Link = (({
  as = 'a',
  disabled = false,
  color = LinkColor.DigitalBlack,
  linkStyle = LinkStyle.MediumDefault,
  dataTestId,
  children,
  ...props
}) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  return (
    <StyledAnchor
      as={as}
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
}) as PolymorphicComponent<'a', LinkProps>;
