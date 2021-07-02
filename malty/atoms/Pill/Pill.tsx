import React from 'react';
import { Icon } from '../Icon/Icon';
import { Colors, NamesTypes, SizesTypes } from '../Icon/Icon.types';
import { StyledPill } from './Pill.styled';
import { PillColor, PillProps, PillSizeType } from './Pill.types';

export const Pill = ({
  text,
  icon,
  isRounded = true,
  onClick,
  onRemoveClick,
  color = PillColor.Closed,
  size = PillSizeType.Medium
}: PillProps) => (
  <StyledPill isRounded={isRounded} hasOnClick={!!onClick} color={color} size={size} onClick={onClick} hasText={!!text}>
    {icon && <Icon name={icon} size={SizesTypes.Small} color={Colors.White} className="pill__icon" />}
    {text}
    {onRemoveClick && (
      <Icon
        className="pill__remove-icon"
        name={NamesTypes.Close}
        onIconClick={onRemoveClick}
        size={SizesTypes.Small}
        color={Colors.White}
      />
    )}
  </StyledPill>
);
