import React from 'react';
import { StyledTooltip, StyledTooltipWrapper } from './Tooltip.styled';
import { TooltipProps } from './Tooltip.types';

export const Tooltip = ({ position, content, children, isOpen }: TooltipProps) => (
  <StyledTooltipWrapper>
    {children}
    <StyledTooltip position={position} open={isOpen}>
      {content}
    </StyledTooltip>
  </StyledTooltipWrapper>
);
