import { StyledParagraph } from '@carlsberggroup/malty.atoms.text';
import React from 'react';
import { StyledTooltip, StyledTooltipWrapper } from './Tooltip.styled';
import { TooltipProps } from './Tooltip.types';

export const Tooltip = ({ position, content, children, isOpen }: TooltipProps) => {
  const style = { '--color': 'dodgerblue' } as React.CSSProperties;
  return (
    <StyledTooltipWrapper style={style}>
      {children}
      <StyledTooltip position={position} open={isOpen}>
        <StyledParagraph>{content}</StyledParagraph>
      </StyledTooltip>
    </StyledTooltipWrapper>
  );
};
