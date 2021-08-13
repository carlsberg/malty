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
  scroll,
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
  const [showButton, setShowButton] = useState(true);

  const handleScroll = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (!!scroll && st > scroll) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const renderComponent = () => (
    <Component
      type={type}
      disabled={disabled}
      hasText={!!text || !!children}
      hasIcon={!!icon}
      sizing={numSize}
      onClick={onClick ?? (() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
      isWhite={isWhite}
      fullWidth={fullWidth}
      iconPos={iconPos}
      className={selected ? 'active' : ''}
      theme={theme}
      showButton={showButton}
    >
      <div className={`text-container ${loading || success || error ? 'invisible' : ''}`}>
        {text || children}
        {icon && <Icon name={icon} color={iconColor} size={IconSizesTypes.Small} />}
      </div>
      {!loading && success && !error && (
        <div className="secondary-container">
          {successText}
          <Icon name={successIcon || IconNamesTypes.ItemCheck} color={iconColor} size={IconSizesTypes.Small} />
        </div>
      )}
      {!loading && !success && error && (
        <div className="secondary-container">
          {errorText}
          <Icon name={errorIcon || IconNamesTypes.ItemClose} color={iconColor} size={IconSizesTypes.Small} />
        </div>
      )}
      {loading && (
        <div className="secondary-container">
          <Loading status={'Pending' as LoadingStatus} />
        </div>
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
  useEffect(() => {
    if (style === ButtonStyle.Floater && !!scroll) {
      setShowButton(false);
      document.addEventListener('scroll', handleScroll);
    }
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [style, scroll]);

  return url ? (
    <StyledAnchor target="_blank" href={url} rel="noreferrer" className={selected ? 'active' : ''}>
      {renderComponent()}
    </StyledAnchor>
  ) : (
    renderComponent()
  );
};
