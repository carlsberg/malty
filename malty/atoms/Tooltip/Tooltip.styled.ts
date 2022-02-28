import styled, { css } from 'styled-components';
import { TooltipPosition } from './Tooltip.types';

const horizontalPosition = css`
  top: 50%;
  transform: translateY(-50%);
  &:before {
    top: 50%;
    transform: translateY(-50%);
  }
`;
const verticalPosition = css`
  left: 50%;
  transform: translateX(-50%);
  &:before {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const positioning = (position: TooltipPosition, anchorOffset: { vertical: number; horizontal: number }) => {
  switch (position) {
    case TooltipPosition.Top:
      return css`
        bottom: calc(100% + ${({ theme }) => theme.sizes.s.value});
        ${verticalPosition}
        margin: 0 0 ${anchorOffset.vertical}px -${anchorOffset.horizontal / 2}px;
        &:before {
          bottom: -${({ theme }) => theme.sizes['2xs'].value};
          border-width: ${({ theme }) => theme.sizes['2xs'].value} ${({ theme }) => theme.sizes['2xs'].value} 0
            ${({ theme }) => theme.sizes['2xs'].value};
          border-top-color: ${({ theme }) => theme.colors.colours.support[20].value};
        }
      `;
    case TooltipPosition.Bottom:
      return css`
        top: calc(100% + ${({ theme }) => theme.sizes.s.value});
        ${verticalPosition}
        margin: 0 0 0 -${anchorOffset.horizontal / 2}px;
        &:before {
          top: -${({ theme }) => theme.sizes['2xs'].value};
          border-width: 0 ${({ theme }) => theme.sizes['2xs'].value} ${({ theme }) => theme.sizes['2xs'].value}
            ${({ theme }) => theme.sizes['2xs'].value};
          border-bottom-color: ${({ theme }) => theme.colors.colours.support[20].value};
        }
      `;
    case TooltipPosition.Right:
      return css`
        left: calc(100% + ${({ theme }) => theme.sizes.s.value});
        ${horizontalPosition}
        margin: -${anchorOffset.vertical / 2}px 0 0 0;
        &:before {
          left: -${({ theme }) => theme.sizes['2xs'].value};
          border-width: ${({ theme }) => theme.sizes['2xs'].value} ${({ theme }) => theme.sizes['2xs'].value}
            ${({ theme }) => theme.sizes['2xs'].value} 0;
          border-right-color: ${({ theme }) => theme.colors.colours.support[20].value};
        }
      `;

    case TooltipPosition.Left:
      return css`
        right: calc(100% + ${({ theme }) => theme.sizes.s.value});
        ${horizontalPosition}
        margin: -${anchorOffset.vertical / 2}px ${anchorOffset.horizontal}px 0 0;
        &:before {
          right: -${({ theme }) => theme.sizes['2xs'].value};
          border-width: ${({ theme }) => theme.sizes['2xs'].value} 0 ${({ theme }) => theme.sizes['2xs'].value}
            ${({ theme }) => theme.sizes['2xs'].value};
          border-left-color: ${({ theme }) => theme.colors.colours.support[20].value};
        }
      `;
    default:
      return ``;
  }
};

export const StyledTooltip = styled.div<{
  position: TooltipPosition;
  anchorOffset: {
    vertical: number;
    horizontal: number;
  };
  open?: boolean;
}>`
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.colours.support[20].value};
  position: absolute;
  display: ${({ open }) => (open ? 'block' : 'none')};
  padding: ${({ theme }) => theme.sizes.s.value};
  min-width: ${({ theme }) => parseInt(theme.sizes['4xl'].value.replace('px', ''), 10) * 3}px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  &:before {
    content: '';
    display: block;
    border-style: solid;
    position: absolute;
    border-color: transparent;
  }
  ${({ position, anchorOffset }) => positioning(position, anchorOffset)};
`;

export const StyledTooltipWrapper = styled.div`
  display: inline-flex;
  position: relative;
  z-index: 0;
`;
