import React from 'react';
import styled from 'styled-components';
import { Colors, ColorsTypes, MainIconInterface, Sizes, SizesTypes } from './icon.types';

const StyledSvg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  dataTestid: 'svg-component'
})<{
  color: ColorsTypes;
  size: SizesTypes;
}>`
  fill: ${({ color }) => Colors[color || ColorsTypes.Primary]};
  height: ${({ size }) => Sizes[size || SizesTypes.Medium]}px;
  width: ${({ size }) => Sizes[size || SizesTypes.Medium]}px;
  transition: fill 0.25s ease-in-out;
`;

export const Icon = ({ size, children, viewBox, color }: MainIconInterface) => (
  <StyledSvg viewBox={viewBox} className="icon" color={color} size={size}>
    {children}
  </StyledSvg>
);
