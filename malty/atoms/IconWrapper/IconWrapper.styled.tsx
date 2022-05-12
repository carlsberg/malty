import styled, { css } from 'styled-components';
import { IconColor } from './IconWrapper.types';

export const StyledIcon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
})<{
  color: IconColor;
  size: string;
}>`
  ${({ color, theme }) => css`
    fill: ${theme.colors.colours.default[color].value};
    color: ${theme.colors.colours.default[color].value};
  `}
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  transition: fill 0.25s ease-in-out;
`;
