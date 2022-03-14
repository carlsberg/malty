import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Loading, LoadingStatus } from '@carlsberggroup/malty.molecules.loading';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ButtonProps, ButtonSize } from '.';
import {
  StyledAnchor,
  StyledFloaterButton,
  StyledLinkButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledTransparentButton
} from './Button.styled';
import { ButtonIconPosition, ButtonStyle, ButtonType } from './Button.types';

export const Button = ({
  text,
  style,
  type = ButtonType.Submit,
  isWhite = false,
  fullWidth = false,
  selected = false,
  disabled,
  onClick,
  onKeyUp,
  icon,
  url,
  size = ButtonSize.Medium,
  iconPos = ButtonIconPosition.Right,
  loading,
  scroll,
  error,
  errorIcon,
  errorText,
  success,
  successIcon,
  successText,
  tabIndex = -1,
  children
}: ButtonProps) => {
  let Component = StyledPrimaryButton;
  let iconColor = isWhite ? IconColor.Primary : IconColor.White;
  switch (style) {
    case ButtonStyle.Secondary:
      Component = StyledSecondaryButton;
      iconColor = isWhite ? IconColor.White : IconColor.Primary;
      break;
    case ButtonStyle.Transparent:
      Component = StyledTransparentButton;
      break;
    case ButtonStyle.Floater:
      Component = StyledFloaterButton;
      break;
    case ButtonStyle.Link:
      Component = StyledLinkButton;
      iconColor = isWhite ? IconColor.White : IconColor.Primary;
      break;
    default:
      break;
  }
  const theme = useContext(ThemeContext) || defaultTheme;
  const [numSize, setNumSize] = useState(theme.sizes.xl.value);
  const [hPadding, _setHorizontalPadding] = useState(theme.sizes.s.value);
  const [fontSize, setFontSize] = useState(theme.typography.desktop.text.medium_default['font-size'].value);
  const [iconSize, setIconSize] = useState(theme.sizes.m.value);
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
    <TypographyProvider>
      <Component
        type={type}
        disabled={disabled}
        hasText={!!text || !!children}
        hasIcon={!!icon}
        sizing={numSize}
        horizontalPadding={hPadding}
        fontSize={fontSize}
        iconSize={iconSize}
        onClick={onClick}
        onKeyUp={onKeyUp}
        isWhite={isWhite}
        fullWidth={fullWidth}
        iconPos={iconPos}
        className={selected ? 'active' : ''}
        theme={theme}
        showButton={showButton}
        tabIndex={tabIndex}
      >
        <div className={`text-container ${loading || success || error ? 'invisible' : ''}`}>
          {icon && iconPos === 'Left' && <Icon name={icon} color={iconColor} size={IconSize.Small} />}
          {text || children}
          {icon && iconPos === 'Right' && <Icon name={icon} color={iconColor} size={IconSize.Small} />}
        </div>
        {!loading && success && !error && (
          <div className="secondary-container">
            {successText}
            <Icon name={successIcon || IconName.ItemCheck} color={iconColor} size={IconSize.Small} />
          </div>
        )}
        {!loading && !success && error && (
          <div className="secondary-container">
            {errorText}
            <Icon name={errorIcon || IconName.ItemClose} color={iconColor} size={IconSize.Small} />
          </div>
        )}
        {loading && (
          <div className="secondary-container">
            <Loading status={'Pending' as LoadingStatus} />
          </div>
        )}
      </Component>
    </TypographyProvider>
  );

  useEffect(() => {
    switch (size) {
      case ButtonSize.Small: {
        setNumSize(theme.sizes.l.value);
        setFontSize(theme.typography.desktop.text['medium-small_default']['font-size'].value);
        setIconSize(theme.sizes.s.value);
        break;
      }
      case ButtonSize.Large: {
        setNumSize(theme.sizes['2xl'].value);
        setFontSize(theme.typography.desktop.text['medium-small_default']['font-size'].value);
        setIconSize(theme.sizes.m.value);
        break;
      }
      case ButtonSize.XLarge: {
        setNumSize(theme.sizes['3xl'].value);
        setFontSize(theme.typography.desktop.text.medium_default['font-size'].value);
        setIconSize(theme.sizes.m.value);
        break;
      }
      default: {
        setNumSize(theme.sizes.xl.value);
        setFontSize(theme.typography.desktop.text['medium-small_default']['font-size'].value);
        setIconSize(theme.sizes.m.value);
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
    <TypographyProvider>
      <StyledAnchor target="_blank" href={url} rel="noreferrer" className={selected ? 'active' : ''}>
        {renderComponent()}
      </StyledAnchor>
    </TypographyProvider>
  ) : (
    renderComponent()
  );
};
