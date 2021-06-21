import styled from 'styled-components';
import { Colors, ColorsTypes, Sizes, SizesTypes } from './icon.types';

export const StyledIcon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
})<{
  color: ColorsTypes;
  size: SizesTypes;
}>`
  fill: ${({ color }) => Colors[color || ColorsTypes.Primary]};
  height: ${({ size }) => Sizes[size || SizesTypes.Medium]}px;
  width: ${({ size }) => Sizes[size || SizesTypes.Medium]}px;
  transition: fill 0.25s ease-in-out;
`;
