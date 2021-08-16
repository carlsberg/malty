import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Loading, LoadingStatus } from '@carlsberggroup/malty.molecules.loading';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ButtonProps, SizeTypes } from '.';
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
  const [numSize, setNumSize] = useState(theme.variables.button.size.medium.value);
  const [fontSize, setFontSize] = useState(theme.typography.text.medium['font-size'].value);
  const [iconSize, setIconSize] = useState(theme.variables.button.icon.size.medium.value);
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
      fontSize={fontSize}
      iconSize={iconSize}
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
        setNumSize(theme.variables.button.size.small.value);
        setFontSize(theme.typography.text['medium-small']['font-size'].value);
        setIconSize(theme.variables.button.icon.size.small.value);
        break;
      }
      case SizeTypes.Large: {
        setNumSize(theme.variables.button.size.large.value);
        setFontSize(theme.typography.text['medium-small']['font-size'].value);
        setIconSize(theme.variables.button.icon.size.medium.value);
        break;
      }
      case SizeTypes.XLarge: {
        setNumSize(theme.variables.button.size.xlarge.value);
        setFontSize(theme.typography.text.medium['font-size'].value);
        setIconSize(theme.variables.button.icon.size.medium.value);
        break;
      }
      default: {
        setNumSize(theme.variables.button.size.medium.value);
        setFontSize(theme.typography.text['medium-small']['font-size'].value);
        setIconSize(theme.variables.button.icon.size.medium.value);
        break;
      }
    }
  }, [size, theme]);

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
