import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
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
  const [numSize, setNumSize] = useState(theme.variables.pill.size.medium.value);
  const [fontSize, setFontSize] = useState(theme.typography.information.small['font-size'].value);
  const [iconSize, setIconSize] = useState(theme.variables.pill.icon.size.medium.value);
  const [padding, setPadding] = useState(theme.variables.pill.icon.size.medium.value);

  useEffect(() => {
    switch (size) {
      case PillSizeType.ExtraSmall: {
        setNumSize(theme.variables.pill.size.xsmall.value);
        setFontSize(theme.typography.information.micro['font-size'].value);
        setIconSize(theme.variables.pill.icon.size.xsmall.value);
        setPadding(theme.variables.pill.padding.xsmall.value);
        break;
      }
      case PillSizeType.Small: {
        setNumSize(theme.variables.pill.size.small.value);
        setFontSize(theme.typography.information.tiny['font-size'].value);
        setIconSize(theme.variables.pill.icon.size.small.value);
        setPadding(theme.variables.pill.padding.small.value);
        break;
      }
      case PillSizeType.Large: {
        setNumSize(theme.variables.pill.size.large.value);
        setFontSize(theme.typography.information.small['font-size'].value);
        setIconSize(theme.variables.pill.icon.size.large.value);
        setPadding(theme.variables.pill.padding.large.value);
        break;
      }
      default: {
        setNumSize(theme.variables.pill.size.medium.value);
        setFontSize(theme.typography.information.small['font-size'].value);
        setIconSize(theme.variables.pill.icon.size.medium.value);
        setPadding(theme.variables.pill.padding.medium.value);
        break;
      }
    }
  }, [size, theme]);

  return (
    <StyledPill
      isRounded={isRounded}
      hasOnClick={!!onClick}
      color={color}
      size={numSize}
      fontSize={fontSize}
      iconSize={iconSize}
      padding={padding}
      onClick={onClick}
      hasText={!!text}
      theme={theme}
    >
      {icon && <Icon name={icon} size={IconSizesTypes.Small} color={IconColors.White} className="pill__icon" />}
      {text}
      {typeof onRemoveClick === 'function' && (
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
