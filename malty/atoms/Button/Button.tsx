/* eslint-disable no-console */
import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ButtonProps, ButtonType, Sizes, SizeTypes } from '.';
import { StyledFloaterButton, StyledLinkButton, StyledPrimaryButton, StyledSecondaryButton } from './Button.styled';

export const Button = ({
  text,
  buttonType,
  isWhite = false,
  isFullWidth = false,
  disabled,
  onClick,
  icon,
  size,
  loading,
  error,
  success,
  children
}: ButtonProps) => {
  let Component = StyledPrimaryButton;
  let iconColor = isWhite ? IconColors.Primary : IconColors.White;
  switch (buttonType) {
    case ButtonType.Secondary:
      Component = StyledSecondaryButton;
      iconColor = isWhite ? IconColors.White : IconColors.Primary;
      break;
    case ButtonType.Floater:
      Component = StyledFloaterButton;
      break;
    case ButtonType.Link:
      Component = StyledLinkButton;
      iconColor = isWhite ? IconColors.White : IconColors.Primary;
      break;
    default:
      break;
  }

  const theme = useContext(ThemeContext) || defaultTheme;

  const [currentIcon, setCurrentIcon] = useState(icon);
  useEffect(() => {
    let iconName = icon;
    if (loading) {
      iconName = IconNamesTypes.Loading;
    } else if (error) {
      iconName = IconNamesTypes.Alert;
    } else if (success) {
      iconName = IconNamesTypes.CheckboxCheck;
    }
    setCurrentIcon(iconName);
  }, [icon, loading, error, success]);

  return (
    <Component
      type="button"
      disabled={disabled}
      hasText={!!text}
      hasIcon={!!icon}
      sizing={Sizes[size || SizeTypes.Medium]}
      onClick={onClick}
      isWhite={isWhite}
      isFullWidth={isFullWidth}
      theme={theme}
    >
      {text || children}
      {currentIcon && <Icon name={currentIcon} color={iconColor} size={IconSizesTypes.Small} />}
    </Component>
  );
};
