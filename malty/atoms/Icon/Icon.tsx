import React from 'react';
import * as IconsPaths from './Icon.paths';
import { IconInterface } from './Icon.types';

export const Icon = ({ size, color, name, viewBox, className, onIconClick }: IconInterface) => {
  const IconElement = IconsPaths[name];
  return (
    <IconElement
      viewBox={viewBox ?? '0 0 24 24'}
      className={className}
      color={color}
      size={size}
      onClick={onIconClick}
    />
  );
};
