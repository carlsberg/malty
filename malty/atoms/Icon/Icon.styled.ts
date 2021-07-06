import styled from 'styled-components';
import { Colors, Sizes, SizesTypes } from './Icon.types';

export const StyledIcon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
})<{
  color: Colors;
  size: SizesTypes;
}>`
  fill: ${({ color, theme }) => (color === Colors.Primary ? theme.themeColors.primary : theme.colors.white)};
  height: ${({ size }) => Sizes[size || SizesTypes.Medium]}px;
  width: ${({ size }) => Sizes[size || SizesTypes.Medium]}px;
  transition: fill 0.25s ease-in-out;
`;
