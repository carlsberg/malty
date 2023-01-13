import React from 'react';
import { IconColor, IconName, IconProps, IconSize, IconsPaths } from '.';

export function Icon({
  size = IconSize.Medium,
  color = IconColor.DigitalBlack,
  name = IconName.CarlsbergFilled,
  viewBox,
  className,
  onClick
}: IconProps) {
  const IconElement = IconsPaths[name];
  return (
    <IconElement
      viewBox={viewBox ?? '0 0 24 24'}
      className={className}
      color={color}
      size={size}
      onClick={onClick}
      name={name}
    />
  );
}
