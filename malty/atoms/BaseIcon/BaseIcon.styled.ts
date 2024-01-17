import { space } from '@carlsberggroup/malty.utils.space';
import styled, { css } from 'styled-components';
import { StyledBaseIconProps } from './BaseIcon.types';

export const StyledBaseIcon = styled.svg<StyledBaseIconProps>`
  ${({ $color, $size, theme }) => css`
    fill: ${$color};
    color: ${$color};
    height: ${theme.sizes[$size].value};
    width: ${theme.sizes[$size].value};

    .path-speach-ballon {
      stroke: ${$color};
    }
  `}

  transition: fill 0.25s ease-in-out;

  ${space}
`;

export const StyledButtonIcon = styled.button`
  all: unset;
  display: flex;
  cursor: pointer;
`;
