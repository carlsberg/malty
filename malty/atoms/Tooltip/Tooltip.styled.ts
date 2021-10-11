import styled, { css } from 'styled-components';
import { Position } from './Tooltip.types';

const horizontalPosition = css`
  top: ${({ theme }) => theme.variables.tooltip.horizontalPosTop.value}%;
  transform: translateY(${({ theme }) => theme.variables.tooltip.horizontalPosTopTranslateY.value}%);
  &:before {
    top: ${({ theme }) => theme.variables.tooltip.horizontalPosTop.value}%;
    transform: translateY(${({ theme }) => theme.variables.tooltip.horizontalPosTopTranslateY.value}%);
  }
`;
const verticalPosition = css`
  left: ${({ theme }) => theme.variables.tooltip.verticalPosLeft.value}%;
  transform: translateX(${({ theme }) => theme.variables.tooltip.verticalPosLeftTranslateX.value}%);
  &:before {
    left: ${({ theme }) => theme.variables.tooltip.verticalPosLeft.value}%;
    transform: translateX(${({ theme }) => theme.variables.tooltip.verticalPosLeftTranslateX.value}%);
  }
`;

const positioning = (position: Position, anchorOffset: { vertical: number; horizontal: number }) => {
  switch (position) {
    case Position.Top:
      return css`
        bottom: calc(100% + ${({ theme }) => theme.variables.tooltip.topPosition.bottom.value}px);
        ${verticalPosition}
        margin: 0 0 ${anchorOffset.vertical}px -${anchorOffset.horizontal / 2}px;
        &:before {
          bottom: -${({ theme }) => theme.variables.tooltip.arrowSize.value}px;
          border-width: ${({ theme }) => theme.variables.tooltip.arrowSize.value}px
            ${({ theme }) => theme.variables.tooltip.topPosition.borderWidth.value}px 0
            ${({ theme }) => theme.variables.tooltip.topPosition.borderWidth.value}px;
          border-top-color: ${({ theme }) => theme.color.form.formSelect.value};
        }
      `;
    case Position.Bottom:
      return css`
        top: calc(100% + ${({ theme }) => theme.variables.tooltip.bottomPosition.top.value}px);
        ${verticalPosition}
        margin: 0 0 0 -${anchorOffset.horizontal / 2}px;
        &:before {
          top: -${({ theme }) => theme.variables.tooltip.arrowSize.value}px;
          border-width: 0 ${({ theme }) => theme.variables.tooltip.bottomPosition.borderWidth.value}px
            ${({ theme }) => theme.variables.tooltip.arrowSize.value}px
            ${({ theme }) => theme.variables.tooltip.bottomPosition.borderWidth.value}px;
          border-bottom-color: ${({ theme }) => theme.color.form.formSelect.value};
        }
      `;
    case Position.Right:
      return css`
        left: calc(100% + ${({ theme }) => theme.variables.tooltip.rightPosition.left.value}px);
        ${horizontalPosition}
        margin: -${anchorOffset.vertical / 2}px 0 0 0;
        &:before {
          left: -${({ theme }) => theme.variables.tooltip.arrowSize.value}px;
          border-width: ${({ theme }) => theme.variables.tooltip.rightPosition.borderWidth.value}px
            ${({ theme }) => theme.variables.tooltip.arrowSize.value}px
            ${({ theme }) => theme.variables.tooltip.rightPosition.borderWidth.value}px 0;
          border-right-color: ${({ theme }) => theme.color.form.formSelect.value};
        }
      `;

    case Position.Left:
      return css`
        right: calc(100% + ${({ theme }) => theme.variables.tooltip.leftPosition.right.value}px);
        ${horizontalPosition}
        margin: -${anchorOffset.vertical / 2}px ${anchorOffset.horizontal}px 0 0;
        &:before {
          right: -${({ theme }) => theme.variables.tooltip.arrowSize.value}px;
          border-width: ${({ theme }) => theme.variables.tooltip.leftPosition.borderWidth.value}px 0
            ${({ theme }) => theme.variables.tooltip.leftPosition.borderWidth.value}px
            ${({ theme }) => theme.variables.tooltip.arrowSize.value}px;
          border-left-color: ${({ theme }) => theme.color.form.formSelect.value};
        }
      `;
    default:
      return ``;
  }
};

export const StyledTooltip = styled.div<{
  position: Position;
  anchorOffset: {
    vertical: number;
    horizontal: number;
  };
  open?: boolean;
}>`
  font-family: inherit;
  background-color: ${({ theme }) => theme.color.form.formSelect.value};
  position: absolute;
  display: ${({ open }) => (open ? 'block' : 'none')};
  padding: ${({ theme }) => theme.variables.tooltip.padding.value}px;
  min-width: ${({ theme }) => theme.variables.tooltip.minWidth.value}px;
  box-shadow: ${({ theme }) => theme.variables.tooltip.boxShadow.value};
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
