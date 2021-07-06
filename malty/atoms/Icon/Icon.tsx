import React from 'react';
import { StyledIcon } from './Icon.styled';
import { IconInterface } from './Icon.types';
import * as IconsPaths from './icons';

export const Icon = ({ size, color, name, viewBox, className, onIconClick }: IconInterface) => {
  const IconPath = IconsPaths[name];
  console.log(name);
  return (
    <StyledIcon
      viewBox={viewBox ?? '0 0 24 24'}
      className={className}
      color={color}
      size={size}
      onClick={onIconClick}
      data-testid="svg-component"
    >
      <IconPath />
    </StyledIcon>
  );
};
