import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledAnchor } from './Link.styled';
import { LinkColor, LinkProps, LinkStyle } from './Link.types';

export const Link = ({
  text,
  disabled = false,
  url,
  children,
  dataTestId,
  color = LinkColor.DigitalBlack,
  linkStyle = LinkStyle.MediumDefault,
  onClick
}: LinkProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <>
      <StyledAnchor
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
        <div>{text || children}</div>
      </StyledAnchor>
    </>
  );
};
