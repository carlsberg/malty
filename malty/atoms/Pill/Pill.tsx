import { Icon, IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledPill, StyledText } from './Pill.styled';
import { PillColor, PillProps, PillSize } from './Pill.types';

export const Pill = ({ text, icon, iconColor, color = PillColor.Primary, size = PillSize.Medium }: PillProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [numSize, setNumSize] = useState(theme.sizes.l.value);
  const [fontSize, setFontSize] = useState(theme.typography.desktop.text['medium-small_bold']['font-size'].value);
  const [iconSize, setIconSize] = useState(theme.sizes.m.value);
  const [padding, setPadding] = useState(theme.sizes.s.value);
  const [marginText, setMarginText] = useState(theme.sizes['4xs'].value);
  const [iconTextColor, setIconTextColor] = useState(iconColor || IconColor.White);

  useEffect(() => {
    switch (size) {
      case PillSize.ExtraSmall: {
        setNumSize(theme.sizes.s.value);
        setFontSize(theme.typography.desktop.text.micro_bold['font-size'].value);
        setIconSize(theme.sizes.xs.value);
        setPadding(theme.sizes['3xs'].value);
        setMarginText(theme.sizes['5xs'].value);
        break;
      }
      case PillSize.Small: {
        setNumSize(theme.sizes.m.value);
        setFontSize(theme.typography.desktop.text.tiny_bold['font-size'].value);
        setIconSize(theme.sizes.s.value);
        setPadding(theme.sizes.xs.value);
        setMarginText(theme.sizes['4xs'].value);
        break;
      }

      default: {
        setNumSize(theme.sizes.l.value);
        setFontSize(theme.typography.desktop.text['medium-small_bold']['font-size'].value);
        setIconSize(theme.sizes.m.value);
        setPadding(theme.sizes.s.value);
        setMarginText(theme.sizes['4xs'].value);
        break;
      }
    }
  }, [size, theme]);

  useEffect(() => {
    if (!iconColor && (color === PillColor.Archive || color === PillColor.Success || color === PillColor.alertStrong)) {
      setIconTextColor(IconColor.Primary);
    }
  }, [color, theme]);

  return (
    <TypographyProvider>
      <StyledPill
        color={color}
        size={numSize}
        fontSize={fontSize}
        iconSize={iconSize}
        padding={padding}
        hasText={!!text}
        theme={theme}
        textColor={iconTextColor}
        pillSize={size}
      >
        {icon && <Icon name={icon} size={IconSize.Small} color={iconTextColor} className="pill__icon" />}
        <StyledText theme={theme} marginText={marginText} hasText={!!text}>
          {text}
        </StyledText>
      </StyledPill>
    </TypographyProvider>
  );
};
