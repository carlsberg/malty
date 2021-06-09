import React, { useEffect, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { ColorsTypes, NamesTypes, Sizes as IconSizes, SizesTypes as IconSizesTypes } from '../icon/icon.types';
import { theme as componentTheme } from '../theme';
import { ButtonInterface, ButtonType, Sizes, SizeTypes } from './button.types';

const IconWrapper = styled.div<{ hasText: boolean }>`
  margin-left: ${({ hasText }) => (hasText ? '10px' : 0)};
`;

const StyledIconPlaceHolder = styled.div<{ hasText: boolean }>`
  display: inline-block;
  height: ${() => IconSizes[IconSizesTypes.Medium]}px;
  width: ${() => IconSizes[IconSizesTypes.Medium]}px;
  margin-left: ${({ hasText }) => (hasText ? '10px' : 0)};
`;

const StyledButton = styled.button<{
  buttonType: ButtonType;
  hasText: boolean;
  hasIcon: boolean;
  sizing: number;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ buttonType }) => (buttonType !== ButtonType.Link ? '0 40px' : '0')};
  height: ${({ sizing, buttonType }) => (buttonType !== ButtonType.Link ? `${sizing}px` : 'auto')};
  font-size: 14px;
  font-weight: bold;
  transition: 0.25s ease-in-out;
  transition-property: background-color, color;
  cursor: pointer;
  background-color: ${({ buttonType, backgroundColor }) =>
    buttonType !== ButtonType.Link ? backgroundColor : 'transparent'};
  color: ${({ textColor }) => textColor};
  font-family: ${({ theme }) => theme.fontFamily.text};
  border: ${({ borderColor, buttonType }) => (buttonType !== ButtonType.Link ? `1px solid ${borderColor}` : 'none')};
  text-decoration: ${({ buttonType }) => (buttonType === ButtonType.Link ? 'underline' : 'none')};
  border-radius: ${({ buttonType, sizing }) => (buttonType === ButtonType.Floater ? `${sizing / 2}px` : '0')};

  &:hover {
    background-color: ${({ theme, buttonType }) =>
      buttonType !== ButtonType.Link ? theme.colors.support : theme.colors.transparent};
  }

  &:hover,
  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.disabled};
  }

  ${({ hasText, hasIcon, sizing }) =>
    !hasText &&
    hasIcon &&
    css`
      padding: 0;
      justify-content: center;
      width: ${sizing}px;
    `};
`;

function loadIconComponent(name: NamesTypes, iconColor: ColorsTypes, hasText: boolean) {
  const IconComponent = React.lazy(() => import(`../icon/icons/${name}`));
  return (
    <React.Suspense fallback={<StyledIconPlaceHolder hasText={hasText} />}>
      <IconWrapper hasText={hasText}>
        <IconComponent color={iconColor} size={SizeTypes.Small} />
      </IconWrapper>
    </React.Suspense>
  );
}

export const Button = ({
  text,
  buttonType,
  inverseColor,
  disabled,
  onClick,
  icon,
  size,
  loading,
  error,
  success
}: ButtonInterface) => {
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

  const backgroundColor = inverseColor ? componentTheme.colors.white : componentTheme.colors.primary;
  const textColor = inverseColor ? componentTheme.colors.primary : componentTheme.colors.white;
  const iconColor = inverseColor ? ColorsTypes.Primary : ColorsTypes.White;
  const borderColor = inverseColor ? componentTheme.colors.primary : componentTheme.colors.transparent;

  return (
    <ThemeProvider theme={componentTheme}>
      <StyledButton
        disabled={disabled}
        hasText={!!text}
        hasIcon={!!icon}
        buttonType={buttonType}
        sizing={Sizes[size || SizeTypes.Medium]}
        backgroundColor={backgroundColor}
        textColor={textColor}
        borderColor={borderColor}
        onClick={onClick}
      >
        {text} {currentIcon && loadIconComponent(currentIcon, iconColor, !!text)}
      </StyledButton>
    </ThemeProvider>
  );
};
