import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ButtonProps, Sizes, SizeTypes } from '.';
import { StyledFloaterButton, StyledLinkButton, StyledPrimaryButton, StyledSecondaryButton } from './Button.styled';
import { ButtonStyle, ButtonTypes, IconPosition } from './Button.types';

export const Button = ({
  text,
  style,
  type = ButtonTypes.Submit,
  isWhite = false,
  fullWidth = false,
  selected = false,
  disabled,
  onClick,
  icon,
  url,
  size = SizeTypes.Medium,
  iconPos = IconPosition.Right,
  loading,
  error,
  success,
  children
}: ButtonProps) => {
  let Component = StyledPrimaryButton;
  let iconColor = isWhite ? IconColors.Primary : IconColors.White;
  switch (style) {
    case ButtonStyle.Secondary:
      Component = StyledSecondaryButton;
      iconColor = isWhite ? IconColors.White : IconColors.Primary;
      break;
    case ButtonStyle.Floater:
      Component = StyledFloaterButton;
      break;
    case ButtonStyle.Link:
      Component = StyledLinkButton;
      iconColor = isWhite ? IconColors.White : IconColors.Primary;
      break;
    default:
      break;
  }

  const theme = useContext(ThemeContext) || defaultTheme;

  const [currentIcon, setCurrentIcon] = useState(icon);
  const [numSize, setNumSize] = useState(Sizes.Medium);

  const renderComponent = () => (
    <Component
      type={type}
      disabled={disabled}
      hasText={!!text}
      hasIcon={!!icon}
      sizing={numSize}
      onClick={onClick}
      isWhite={isWhite}
      fullWidth={fullWidth}
      iconPos={iconPos}
      className={selected ? 'active' : ''}
      theme={theme}
    >
      {text || children}
      {currentIcon && <Icon name={currentIcon} color={iconColor} size={IconSizesTypes.Small} />}
    </Component>
  );

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

  useEffect(() => {
    switch (size) {
      case SizeTypes.Small: {
        setNumSize(Sizes.Small);
        break;
      }
      case SizeTypes.Large: {
        setNumSize(Sizes.Large);
        break;
      }
      case SizeTypes.XLarge: {
        setNumSize(Sizes.XLarge);
        break;
      }
      default: {
        setNumSize(Sizes.Medium);
        break;
      }
    }
  }, [size]);

  return style === ButtonStyle.Link ? (
    <a target="_blank" href={url} rel="noreferrer" className={selected ? 'active' : ''}>
      {renderComponent()}
    </a>
  ) : (
    renderComponent()
};
