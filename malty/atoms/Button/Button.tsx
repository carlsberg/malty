import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Loading, LoadingStatus } from '@carlsberggroup/malty.molecules.loading';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ButtonProps, Sizes, SizeTypes } from '.';
import {
  StyledAnchor,
  StyledFloaterButton,
  StyledLinkButton,
  StyledPrimaryButton,
  StyledSecondaryButton
} from './Button.styled';
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
  errorIcon,
  errorText,
  success,
  successIcon,
  successText,
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
  const [numSize, setNumSize] = useState(Sizes.Medium);

  const renderComponent = () => (
    <Component
      type={type}
      disabled={disabled}
      hasText={!!text || !!children}
      hasIcon={!!icon}
      sizing={numSize}
      onClick={onClick}
      isWhite={isWhite}
      fullWidth={fullWidth}
      iconPos={iconPos}
      className={selected ? 'active' : ''}
      theme={theme}
    >
      {(success && successText) || (error && errorText) || text || children}
      {icon && !loading && <Icon name={icon} color={iconColor} size={IconSizesTypes.Small} />}
      {/* This is temporary use LoadingProps['status'] since the updated loading is not exported yet */}
      {loading && !success && !error && <Loading status={'Pending' as LoadingStatus} />}
      {success && !error && (
        <Icon name={successIcon || IconNamesTypes.ItemCheck} color={iconColor} size={IconSizesTypes.Small} />
      )}
      {!success && error && (
        <Icon name={errorIcon || IconNamesTypes.ItemClose} color={iconColor} size={IconSizesTypes.Small} />
      )}
    </Component>
  );

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

  return url ? (
    <StyledAnchor target="_blank" href={url} rel="noreferrer" className={selected ? 'active' : ''}>
      {renderComponent()}
    </StyledAnchor>
  ) : (
    renderComponent()
  );
};
