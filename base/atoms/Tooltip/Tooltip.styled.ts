import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Position } from './Tooltip.types';

const arrowSize = '10px';

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

const positioning = (position: Position) => {
  switch (position) {
    case Position.Top:
      return css`
        bottom: calc(100% + 15px);
        ${verticalPosition}
        &:before {
          bottom: -${arrowSize};
          border-width: ${arrowSize} 10px 0 10px;
          border-top-color: ${theme.colors.supportLighter};
        }
      `;
    case Position.Bottom:
      return css`
        top: calc(100% + 15px);
        ${verticalPosition}
        &:before {
          top: -${arrowSize};
          border-width: 0 10px ${arrowSize} 10px;
          border-bottom-color: ${theme.colors.supportLighter};
        }
      `;
    case Position.Right:
      return css`
        left: calc(100% + 15px);
        ${horizontalPosition}
        &:before {
          left: -${arrowSize};
          border-width: 10px ${arrowSize} 10px 0;
          border-right-color: ${theme.colors.supportLighter};
        }
      `;

    case Position.Left:
      return css`
        right: calc(100% + 15px);
        ${horizontalPosition}
        &:before {
          right: -${arrowSize};
          border-width: 10px 0 10px ${arrowSize};
          border-left-color: ${theme.colors.supportLighter};
        }
      `;
    default:
      return ``;
  }
};

export const StyledTooltip = styled.div<{
  position: Position;
  open: boolean;
}>`
  background-color: ${theme.colors.supportLighter};
  position: absolute;
  display: ${({ open }) => (open ? 'block' : 'none')};
  padding: 15px;
  min-width: 200px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  &:before {
    content: '';
    display: block;
    border-style: solid;
    position: absolute;
    border-color: transparent;
  }
  ${({ position }) => positioning(position)};
`;

export const StyledTooltipWrapper = styled.div`
  display: inline-flex;
  position: relative;
`;
