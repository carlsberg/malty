import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledChip, StyledIcon, StyledTextContainer } from './Chip.styled';
import { ChipProps, ChipSize } from './Chip.types';

export const Chip = ({
  label,
  size = ChipSize.Medium,
  selected = false,
  onChange = () => null,
  icon,
  showAction = false,
  dataTestId
}: ChipProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [chipSize, setChipSize] = useState(theme.sizes.l.value);
  const [fontSize, setFontSize] = useState(TextStyle.MediumSmallBold);

  const handleClick = () => {
    onChange(!selected);
  };

  useEffect(() => {
    switch (size) {
      case ChipSize.XSmall: {
        setChipSize(theme.sizes.s.value);
        setFontSize(TextStyle.TinyBold);

        break;
      }
      case ChipSize.Small: {
        setChipSize(theme.sizes.m.value);
        setFontSize(TextStyle.SmallBold);
        break;
      }

      default: {
        setChipSize(theme.sizes.l.value);
        setFontSize(TextStyle.MediumSmallBold);
        break;
      }
    }
  }, [size, theme]);
  return (
    <TypographyProvider>
      <StyledChip data-testid={dataTestId} onClick={handleClick} selected={selected} size={chipSize} theme={theme}>
        {!showAction && icon && (
          <StyledIcon data-testid={`${dataTestId}-icon`} theme={theme}>
            <Icon
              name={icon}
              color={IconColor.DigitalBlack}
              size={size === ChipSize.XSmall ? IconSize.ExtraSmall : IconSize.Small}
            />
          </StyledIcon>
        )}

        <StyledTextContainer data-testid={`${dataTestId}-label`} theme={theme}>
          <Text textStyle={fontSize} color={selected ? TextColor.White : TextColor.Support80}>
            {label}
          </Text>
        </StyledTextContainer>
        {showAction && size !== ChipSize.XSmall && (
          <Button
            dataTestId={`${dataTestId}-button`}
            size={size === ChipSize.Small ? ButtonSize.XSmall : ButtonSize.Small}
            style={ButtonStyle.Transparent}
            icon={selected ? IconName.Close : IconName.Plus}
          />
        )}
      </StyledChip>
    </TypographyProvider>
  );
};
