import React from 'react';
import { useIconColor } from './BaseIcon.helper';
import { StyledBaseIcon, StyledButtonIcon } from './BaseIcon.styled';
import { BaseIconProps, IconColor, IconSize } from './BaseIcon.types';

export const BaseIcon = ({
  color = IconColor.DigitalBlack,
  size = IconSize.Medium,
  dataTestId = 'icon',
  viewBox,
  children,
  className,
  onClick,
  ...props
}: BaseIconProps) => {
  const iconColor = useIconColor(color);

  const renderedIcon = (
    <StyledBaseIcon
      viewBox={viewBox ?? '0 0 24 24'}
      $color={iconColor}
      $size={size}
      data-testid={dataTestId}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      {children}
    </StyledBaseIcon>
  );

  const renderedButtonIcon = (
    <StyledButtonIcon type="button" className={className} onClick={onClick}>
      {renderedIcon}
    </StyledButtonIcon>
  );

  return onClick ? renderedButtonIcon : renderedIcon;
};
