import { space } from '@carlsberggbs/malty.utils.space';
import styled, { css } from 'styled-components';
import { PillSize, StyledPillProps } from './Pill.types';

export const StyledPill = styled.div<StyledPillProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  line-height: ${({ $lineHeight }) => $lineHeight};
  color: ${({ $textColor }) => $textColor};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ $size }) => $size};
  min-width: ${({ $size }) => $size};
  box-sizing: border-box;
  gap: ${({ $gap }) => $gap};
  padding: ${({ $padding }) => $padding};
  text-transform: ${({ $isUppercase }) => ($isUppercase ? 'uppercase' : 'initial')};
  border-radius: ${({ theme }) => theme.borderRadiusV2.round};

  ${({ $hasIcon, $hasText, $pillSize, theme }) => {
    let padding;
    let gap;

    if ($hasIcon && !$hasText) {
      if ($pillSize === PillSize.XSmall) {
        padding = theme.sizesV2['4xs'];
        gap = theme.sizesV2['5xs'];
      }
      if ($pillSize === PillSize.Small) {
        padding = theme.sizesV2['4xs'];
        gap = theme.sizesV2['4xs'];
      }
      if ($pillSize === PillSize.Medium) {
        padding = theme.sizesV2['4xs'];
        gap = theme.sizesV2['3xs'];
      }
    }

    return css`
      padding: ${padding};
      gap: ${gap};
    `;
  }}

  ${space}
`;
