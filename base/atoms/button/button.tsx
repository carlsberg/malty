import React, { useEffect, useState } from 'react';
import { ColorsTypes, NamesTypes, SizesTypes } from '../icon/icon.types';
import {
  StyledButtonIcon,
  StyledFloaterButton,
  StyledLinkButton,
  StyledPrimaryButton,
  StyledSecondaryButton
} from './button.styled';
import { ButtonInterface, ButtonType, Sizes, SizeTypes } from './button.types';

export const Button = ({
  text,
  buttonType,
  isWhite = false,
  disabled,
  onClick,
  icon,
  size,
  loading,
  error,
  success
}: ButtonInterface) => {
  let Component = StyledPrimaryButton;
  let iconColor = isWhite ? ColorsTypes.Primary : ColorsTypes.White;
  switch (buttonType) {
    case ButtonType.Secondary:
      Component = StyledSecondaryButton;
      iconColor = isWhite ? ColorsTypes.White : ColorsTypes.Primary;
      break;
    case ButtonType.Floater:
      Component = StyledFloaterButton;
      break;
    case ButtonType.Link:
      Component = StyledLinkButton;
      iconColor = isWhite ? ColorsTypes.White : ColorsTypes.Primary;
      break;
    default:
      break;
  }

  const [currentIcon, setCurrentIcon] = useState(icon);
  useEffect(() => {
    let iconName = icon;
    if (loading) {
      iconName = NamesTypes.Loading;
    } else if (error) {
      iconName = NamesTypes.Alert;
    } else if (success) {
      iconName = NamesTypes.CheckboxCheckSquare;
    }
    setCurrentIcon(iconName);
  }, [icon, loading, error, success]);

  return (
    <Component
      disabled={disabled}
      hasText={!!text}
      hasIcon={!!icon}
      sizing={Sizes[size || SizeTypes.Medium]}
      onClick={onClick}
      isWhite={isWhite}
    >
      {text}
      {currentIcon && (
        <StyledButtonIcon hasText={!!text} name={currentIcon} color={iconColor} size={SizesTypes.Small} />
      )}
    </Component>
  );
};
