import React, { ReactElement } from 'react';
import { StyledIcon } from './icon.styled';
import { IconInterface } from './icon.types';

export const WrappedIcon = ({ size, color, viewBox, className, onIconClick }: IconInterface, icon: ReactElement) => {
  return (
    <StyledIcon
      viewBox={viewBox ?? '0 0 24 24'}
      className={className}
      color={color}
      size={size}
      onClick={onIconClick}
      data-testid="svg-component"
    >
      {icon}
    </StyledIcon>
  );
};
