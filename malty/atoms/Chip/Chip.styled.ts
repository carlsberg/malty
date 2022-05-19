import styled, { css } from 'styled-components';
import { ChipSize } from './Chip.types';

export const StyledChip = styled.div<{
  height: string;
  hasButton?: boolean;
  selected: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  size?: ChipSize;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${({ height }) => height};
  width: fit-content;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.colours.support[100].value : theme.colors.colours.support[20].value};
  padding: 0
    ${({ size, theme }) => {
      if (size === ChipSize.XSmall) {
        return theme.sizes['2xs'].value;
      }
      if (size === ChipSize.Small) {
        return theme.sizes.xs.value;
      }
      return theme.sizes.s.value;
    }};
  ${({ disabled, selected }) =>
    disabled &&
    css`
      pointer-events: none;
      cursor: default;
      background-color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
      opacity: ${selected ? 1 : 0.75};
    `};
  ${({ readOnly, selected }) =>
    readOnly &&
    !selected &&
    css`
      pointer-events: none;
      cursor: default;
      background-color: ${({ theme }) => theme.colors.colours.support[20].value};
    `};
  ${({ readOnly, selected }) =>
    readOnly &&
    selected &&
    css`
      pointer-events: none;
      cursor: default;
      background-color: ${({ theme }) => theme.colors.colours.support[80].value};
    `};
  ${({ hasButton }) =>
    hasButton &&
    css`
      padding-right: 0;
    `};
  button {
    svg {
      transition: all 0.3s ease-in-out !important;
      ${({ selected }) =>
        selected &&
        css`
          transition: all 0.3s ease-in-out !important;
          transform: rotate(-45deg);
        `};
    }
  }
`;
export const StyledTextContainer = styled.div<{
  size?: ChipSize;
  hasIcon?: boolean;
  hasButton?: boolean;
}>`
  padding-left: ${({ size, theme, hasIcon }) => {
    if (hasIcon && size === ChipSize.XSmall) {
      return theme.sizes['4xs'].value;
    }
    return hasIcon && theme.sizes['2xs'].value;
  }};
  padding-right: ${({ hasButton, theme, size }) => {
    if (hasButton && size === ChipSize.XSmall) {
      return theme.sizes['2xs'].value;
    }
    if (hasButton && size === ChipSize.Small) {
      return theme.sizes.xs.value;
    }
    return hasButton && theme.sizes.s.value;
  }};
`;
export const StyledIcon = styled.div``;
