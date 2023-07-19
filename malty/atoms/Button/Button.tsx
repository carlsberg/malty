import { Icon, IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { ProgressSpinnerColor } from '@carlsberggroup/malty.atoms.progress-spinner';
import { Loading, LoadingStatus } from '@carlsberggroup/malty.molecules.loading';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ButtonProps, ButtonSize } from '.';
import { StyledAnchor, StyledPrimaryButton, StyledSecondaryButton, StyledTransparentButton } from './Button.styled';
import { ButtonColor, ButtonIconPosition, ButtonStyle, ButtonType } from './Button.types';

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
  dataTestId,
  color = ButtonColor.DigitalBlack,
  className,
  ...props
}: ButtonProps) => {
  let Component = StyledPrimaryButton;
  let iconColor = negative ? IconColor.DigitalBlack : IconColor.White;
  switch (style) {
    case ButtonStyle.Secondary:
      Component = StyledSecondaryButton;
      iconColor = negative ? IconColor.White : IconColor.DigitalBlack;
      if (!negative) {
        if (color === ButtonColor.ThemePrimary) {
          iconColor = IconColor.Primary;
        }
        if (color === ButtonColor.ThemeSecondary) {
          iconColor = IconColor.Secondary;
        }
        if (color === ButtonColor.ThemeTertiary) {
          iconColor = IconColor.Tertiary;
        }
      }

      break;
    case ButtonStyle.Transparent:
      Component = StyledTransparentButton;
      iconColor = negative ? IconColor.White : IconColor.DigitalBlack;
      if (!negative) {
        if (color === ButtonColor.ThemePrimary) {
          iconColor = IconColor.Primary;
        }
        if (color === ButtonColor.ThemeSecondary) {
          iconColor = IconColor.Secondary;
        }
        if (color === ButtonColor.ThemeTertiary) {
          iconColor = IconColor.Tertiary;
        }
      }
      break;

    default:
      if (negative) {
        if (color === ButtonColor.ThemePrimary) {
          iconColor = IconColor.Primary;
        }
        if (color === ButtonColor.ThemeSecondary) {
          iconColor = IconColor.Secondary;
        }
        if (color === ButtonColor.ThemeTertiary) {
          iconColor = IconColor.Tertiary;
        }
      }
      break;
  }
  const theme = useContext(ThemeContext) || defaultTheme;

  const getIsLoadingNegative = (): boolean => (style === ButtonStyle.Primary ? !negative : negative);

  const renderComponent = () => (
    <Component
      color={color}
      data-testid={dataTestId}
      type={type}
      disabled={disabled}
      isLoading={loading}
      hasText={!!text || !!children}
      hasIcon={!!icon}
      onClick={onClick}
      onKeyUp={onKeyUp}
      isNegative={negative}
      fullWidth={fullWidth}
      iconPos={iconPos}
      theme={theme}
      tabIndex={tabIndex}
      className={selected ? `${className} active` : className}
      size={size}
      {...props}
    >
      <div className="text-container">
        {icon && iconPos === ButtonIconPosition.Left && <Icon name={icon} color={iconColor} size={IconSize.Small} />}
        {text || children}
        {icon && iconPos === ButtonIconPosition.Right && <Icon name={icon} color={iconColor} size={IconSize.Small} />}
      </div>
      {loading && (
        <div data-testid={`${dataTestId}-loading`} className="secondary-container">
          <Loading
            color={color as unknown as ProgressSpinnerColor}
            negative={getIsLoadingNegative()}
            status={LoadingStatus.Pending}
          />
        </div>
      )}
    </Component>
  );

  return url ? (
    <StyledAnchor target="_blank" href={url} rel="noreferrer" className={selected ? 'active' : ''}>
      {renderComponent()}
    </StyledAnchor>
  ) : (
    renderComponent()
  );
};
