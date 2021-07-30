import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import React, { useEffect, useState } from 'react';
import { ButtonProps, ButtonType, Sizes, SizeTypes } from '.';
import { StyledFloaterButton, StyledLinkButton, StyledPrimaryButton, StyledSecondaryButton } from './Button.styled';
import { IconPosition } from './Button.types';

export const Button = ({
  text,
  buttonType,
  isWhite = false,
  fullWidth = false,
  disabled,
  onClick,
  icon,
  size = SizeTypes.Medium,
  iconPos = IconPosition.Right,
  loading,
  error,
  success
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

  const [currentIcon, setCurrentIcon] = useState(icon);
  const [numSize, setNumSize] = useState(Sizes.Medium);
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

  return (
    <Component
      type="button"
      disabled={disabled}
      hasText={!!text}
      hasIcon={!!icon}
      sizing={numSize}
      onClick={onClick}
      isWhite={isWhite}
      fullWidth={fullWidth}
      iconPos={iconPos}
    >
      {text}
      {currentIcon && <Icon name={currentIcon} color={iconColor} size={IconSizesTypes.Small} />}
    </Component>
  );
};
