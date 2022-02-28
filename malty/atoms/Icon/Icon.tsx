import React from 'react';
import { IconColor, IconName, IconSize } from '.';
import * as IconsPaths from './Icon.paths';
import { IconProps } from './Icon.types';

export const Icon = ({
  size = IconSize.Medium,
  color = IconColor.Primary,
  name = IconName.CarlsbergFilled,
  viewBox,
  className,
  onClick
}: IconProps) => {
  const IconElement = IconsPaths[name];
  return (
    <IconElement viewBox={viewBox ?? '0 0 24 24'} className={className} color={color} size={size} onClick={onClick} />
  );
};
