/* eslint-disable no-nested-ternary */
import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useEffect, useState } from 'react';
import { StyledChip, StyledIcon, StyledTextContainer } from './Chip.styled';
import { ChipProps, ChipSize } from './Chip.types';

export function Chip({
  label,
  size = ChipSize.Medium,
  selected = false,
  onChange = () => null,
  icon,
  showAction = false,
  dataTestId,
  disabled = false,
  readOnly = false,
}: ChipProps) {
  const theme = defaultTheme;
  const [chipSize, setChipSize] = useState(theme.sizes.l.value);
  const [fontSize, setFontSize] = useState(TextStyle.MediumSmallBold);
  const [buttonSize, setButtonSize] = useState(ButtonSize.Medium);

  const handleClick = () => {
    onChange(!selected);
  };

  useEffect(() => {
    switch (size) {
      case ChipSize.XSmall: {
        setChipSize(theme.sizes.m.value);
        setFontSize(TextStyle.SmallBold);
        setButtonSize(ButtonSize.XSmall);
        break;
      }
      case ChipSize.Small: {
        setChipSize(theme.sizes.l.value);
        setFontSize(TextStyle.MediumSmallBold);
        setButtonSize(ButtonSize.Small);
        break;
      }

      default: {
        setChipSize(theme.sizes.xl.value);
        setFontSize(TextStyle.MediumSmallBold);
        setButtonSize(ButtonSize.Medium);
        break;
      }
    }
  }, [size, theme]);
  return (
    <StyledChip
      hasButton={showAction}
      disabled={disabled}
      readOnly={readOnly}
      data-testid={dataTestId}
      onClick={handleClick}
      selected={selected}
      height={chipSize}
      size={size}
      theme={theme}
    >
      {!showAction && icon && (
        <StyledIcon data-testid={`${dataTestId}-icon`} theme={theme}>
          <Icon
            name={icon}
            color={
              readOnly && selected
                ? IconColor.White
                : readOnly && !selected
                ? IconColor.Support80
                : disabled
                ? IconColor.DisableLight
                : selected
                ? IconColor.White
                : IconColor.DigitalBlack
            }
            size={size === ChipSize.XSmall ? IconSize.Small : IconSize.MediumSmall}
          />
        </StyledIcon>
      )}

      <StyledTextContainer
        hasButton={showAction}
        hasIcon={!!icon}
        size={size}
        data-testid={`${dataTestId}-label`}
        theme={theme}
      >
        <Text
          textStyle={fontSize}
          color={
            (readOnly && selected
              ? TextColor.White
              : readOnly && !selected
              ? TextColor.Support80
              : disabled
              ? IconColor.DisableLight
              : selected
              ? IconColor.White
              : IconColor.DigitalBlack) as TextColor
          }
        >
          {label}
        </Text>
      </StyledTextContainer>
      {showAction && (
        <Button
          disabled={disabled || readOnly}
          negative={selected && !disabled}
          dataTestId={`${dataTestId}-button`}
          size={buttonSize}
          style={ButtonStyle.Transparent}
          icon={IconName.Plus}
        />
      )}
    </StyledChip>
  );
}
