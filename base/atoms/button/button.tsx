import React, { useEffect, useState } from 'react';
import { ColorsTypes, NamesTypes } from '../icon/icon.types';
import {
  IconWrapper,
  StyledFloaterButton,
  StyledIconPlaceHolder,
  StyledLinkButton,
  StyledPrimaryButton,
  StyledSecondaryButton
} from './button.styled';
import { ButtonInterface, ButtonType, Sizes, SizeTypes } from './button.types';

const loadIconComponent = (name: NamesTypes, iconColor: ColorsTypes, hasText: boolean) => {
  const IconComponent = React.lazy(() => import(`../icon/icons/${name}`));
  return (
    <React.Suspense fallback={<StyledIconPlaceHolder hasText={hasText} />}>
      <IconWrapper hasText={hasText}>
        <IconComponent color={iconColor} size={SizeTypes.Small} />
      </IconWrapper>
    </React.Suspense>
  );
};

export const Button = ({
  text,
  buttonType,
  inverseColor = false,
  disabled,
  onClick,
  icon,
  size,
  loading,
  error,
  success
}: ButtonInterface) => {
  let Component = StyledPrimaryButton;
  let iconColor = inverseColor ? ColorsTypes.Primary : ColorsTypes.White;
  switch (buttonType) {
    case ButtonType.Secondary:
      Component = StyledSecondaryButton;
      iconColor = inverseColor ? ColorsTypes.White : ColorsTypes.Primary;
      break;
    case ButtonType.Floater:
      Component = StyledFloaterButton;
      break;
    case ButtonType.Link:
      Component = StyledLinkButton;
      iconColor = inverseColor ? ColorsTypes.White : ColorsTypes.Primary;
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
      isInverse={inverseColor}
    >
      {text} {currentIcon && loadIconComponent(currentIcon, iconColor, !!text)}
    </Component>
  );
};
