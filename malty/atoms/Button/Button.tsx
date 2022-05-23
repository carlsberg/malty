import { Icon, IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Loading, LoadingStatus } from '@carlsberggroup/malty.molecules.loading';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ButtonProps, ButtonSize } from '.';
import {
  StyledAnchor,
  StyledLinkButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledTransparentButton
} from './Button.styled';
import { ButtonIconPosition, ButtonStyle, ButtonType } from './Button.types';

export const Button = ({
  text,
  style,
  type = ButtonType.Default,
  negative = false,
  fullWidth = false,
  disabled,
  selected = false,
  onClick,
  onKeyUp,
  icon,
  url,
  size = ButtonSize.Medium,
  iconPos = ButtonIconPosition.Right,
  loading = false,
  tabIndex = -1,
  children,
  dataTestId
}: ButtonProps) => {
  let Component = StyledPrimaryButton;
  let iconColor = negative ? IconColor.DigitalBlack : IconColor.White;
  switch (style) {
    case ButtonStyle.Secondary:
      Component = StyledSecondaryButton;
      iconColor = negative ? IconColor.White : IconColor.DigitalBlack;
      break;
    case ButtonStyle.Transparent:
      Component = StyledTransparentButton;
      iconColor = negative ? IconColor.White : IconColor.DigitalBlack;
      break;
    case ButtonStyle.Link:
      Component = StyledLinkButton;
      iconColor = negative ? IconColor.White : IconColor.DigitalBlack;
      break;
    default:
      break;
  }
  const theme = useContext(ThemeContext) || defaultTheme;
  const [numSize, setNumSize] = useState(theme.sizes.xl.value);
  const [hPadding, _setHorizontalPadding] = useState(theme.sizes.s.value);
  const [fontSize, setFontSize] = useState(theme.typography.desktop.text.medium_default['font-size'].value);
  const [iconSize, setIconSize] = useState(theme.sizes.m.value);

  const renderComponent = () => (
    <TypographyProvider>
      <Component
        data-testid={dataTestId}
        type={type}
        disabled={disabled}
        isLoading={loading}
        hasText={!!text || !!children}
        hasIcon={!!icon}
        sizing={numSize}
        horizontalPadding={hPadding}
        fontSize={fontSize}
        iconSize={iconSize}
        onClick={onClick}
        onKeyUp={onKeyUp}
        isNegative={negative}
        fullWidth={fullWidth}
        iconPos={iconPos}
        theme={theme}
        tabIndex={tabIndex}
        className={selected ? 'active' : ''}
      >
        {!loading && (
          <div className={`text-container `}>
            {icon && iconPos === ButtonIconPosition.Left && (
              <Icon name={icon} color={iconColor} size={IconSize.Small} />
            )}
            {text || children}
            {icon && iconPos === ButtonIconPosition.Right && (
              <Icon name={icon} color={iconColor} size={IconSize.Small} />
            )}
          </div>
        )}
        {loading && (
          <div data-testid={`${dataTestId}-loading`} className="secondary-container">
            <Loading status={LoadingStatus.Pending} />
          </div>
        )}
      </Component>
    </TypographyProvider>
  );

  useEffect(() => {
    switch (size) {
      case ButtonSize.XSmall: {
        setNumSize(theme.sizes.m.value);
        setFontSize(theme.typography.desktop.text.small_bold['font-size'].value);
        setIconSize(theme.sizes.s.value);
        break;
      }
      case ButtonSize.Small: {
        setNumSize(theme.sizes.l.value);
        setFontSize(theme.typography.desktop.text['medium-small_bold']['font-size'].value);
        setIconSize(theme.sizes.ms.value);
        break;
      }
      case ButtonSize.Large: {
        setNumSize(theme.sizes['2xl'].value);
        setFontSize(theme.typography.desktop.text['medium-small_bold']['font-size'].value);
        setIconSize(theme.sizes.m.value);
        break;
      }
      case ButtonSize.XLarge: {
        setNumSize(theme.sizes['3xl'].value);
        setFontSize(theme.typography.desktop.text.medium_bold['font-size'].value);
        setIconSize(theme.sizes.m.value);
        break;
      }
      default: {
        setNumSize(theme.sizes.xl.value);
        setFontSize(theme.typography.desktop.text['medium-small_bold']['font-size'].value);
        setIconSize(theme.sizes.m.value);
        break;
      }
    }
  }, [size, theme]);

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
