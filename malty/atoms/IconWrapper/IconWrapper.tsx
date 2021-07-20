import React from 'react';
import { StyledIcon } from './IconWrapper.styled';
import { IconWrapperInterface } from './IconWrapper.types';

const IconWrapper = ({ size, color, viewBox, className, onClick }: IconWrapperInterface, icon: JSX.Element) => (
  <StyledIcon
    viewBox={viewBox ?? '0 0 24 24'}
    className={className}
    color={color}
    size={size}
    onClick={onClick}
    data-testid="svg-component"
  >
    {icon}
  </StyledIcon>
);

export default IconWrapper;
