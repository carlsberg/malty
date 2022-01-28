import styled from 'styled-components';
import { Colors } from './IconWrapper.types';

export const StyledIcon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
})<{
  color: Colors;
  size: string;
}>`
  fill: ${({ color, theme }) => (color === Colors.Primary ? theme.color.default.value : theme.color.white.value)};
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  transition: fill 0.25s ease-in-out;
  color: ${({ color, theme }) => (color === Colors.Primary ? theme.color.default.value : theme.color.white.value)};
`;
