import React from 'react';
import { Icon } from '../icon/icon';
import { ColorsTypes, NamesTypes, SizesTypes } from '../icon/icon.types';
import { StyledPill } from './pill.styled';
import { PillColor, PillInterface, PillSizeType } from './pill.types';

export const Pill = ({
  text,
  icon,
  isRounded = true,
  onClick,
  onRemoveClick,
  color = PillColor.Closed,
  size = PillSizeType.Medium
}: PillInterface) => (
  <StyledPill isRounded={isRounded} hasOnClick={!!onClick} color={color} size={size} onClick={onClick} hasText={!!text}>
    {icon && <Icon name={icon} size={SizesTypes.Small} color={ColorsTypes.White} className="pill__icon" />}
    {text}
    {onRemoveClick && (
      <Icon
        className="pill__remove-icon"
        name={NamesTypes.Close}
        onClick={onRemoveClick}
        size={SizesTypes.Small}
        color={ColorsTypes.White}
      />
    )}
  </StyledPill>
);
