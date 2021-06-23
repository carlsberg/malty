import React from 'react';
import { StyledIcon } from './icon.styled';
import { IconInterface } from './icon.types';
import * as IconsPaths from './icons/index';

export const Icon = ({ size, color, name, viewBox, className, onIconClick }: IconInterface) => {
  const IconPath = IconsPaths[name];
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
