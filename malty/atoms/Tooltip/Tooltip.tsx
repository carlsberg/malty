import { StyledParagraph } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledTooltip, StyledTooltipWrapper } from './Tooltip.styled';
import { TooltipProps } from './Tooltip.types';

export const Tooltip = ({ position, content, children, isOpen }: TooltipProps) => {
  const style = { '--color': 'dodgerblue' } as React.CSSProperties;
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledTooltipWrapper style={style} theme={theme}>
      {children}
      <StyledTooltip position={position} open={isOpen} theme={theme}>
        <StyledParagraph theme={theme}>{content}</StyledParagraph>
      </StyledTooltip>
    </StyledTooltipWrapper>
  );
};
