import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
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
}: PillProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledPill
      isRounded={isRounded}
      hasOnClick={!!onClick}
      color={color}
      size={size}
      onClick={onClick}
      hasText={!!text}
      theme={theme}
    >
      {icon && <Icon name={icon} size={IconSizesTypes.Small} color={IconColors.White} className="pill__icon" />}
      {text}
      {onRemoveClick && (
        <Icon
          className="pill__remove-icon"
          name={IconNamesTypes.Close}
          onClick={onRemoveClick}
          size={IconSizesTypes.Small}
          color={IconColors.White}
        />
      )}
    </StyledPill>
  );
};
