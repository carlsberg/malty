import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledPill } from './Pill.styled';
import { PillColor, PillProps, PillSize } from './Pill.types';

export const Pill = ({
  text,
  icon,
  isRounded = true,
  onClick,
  onRemoveClick,
  color = PillColor.Close,
  size = PillSize.Medium
}: PillProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [numSize, setNumSize] = useState(theme.sizes.l.value);
  const [fontSize, setFontSize] = useState(theme.typography.desktop.text.small_default['font-size'].value);
  const [iconSize, setIconSize] = useState(theme.sizes.xs.value);
  const [padding, setPadding] = useState(theme.sizes.xs.value);

  useEffect(() => {
    switch (size) {
      case PillSize.ExtraSmall: {
        setNumSize(theme.sizes.s.value);
        setFontSize(theme.typography.desktop.text.micro_default['font-size'].value);
        setIconSize(theme.sizes['2xs'].value);
        setPadding(theme.sizes['4xs'].value);
        break;
      }
      case PillSize.Small: {
        setNumSize(theme.sizes.m.value);
        setFontSize(theme.typography.desktop.text.tiny_default['font-size'].value);
        setIconSize(theme.sizes.xs.value);
        setPadding(theme.sizes['2xs'].value);
        break;
      }
      case PillSize.Large: {
        setNumSize(theme.sizes.xl.value);
        setFontSize(theme.typography.desktop.text.small_default['font-size'].value);
        setIconSize(theme.sizes.xs.value);
        setPadding(theme.sizes.s.value);
        break;
      }
      default: {
        setNumSize(theme.sizes.l.value);
        setFontSize(theme.typography.desktop.text.small_default['font-size'].value);
        setIconSize(theme.sizes.xs.value);
        setPadding(theme.sizes.xs.value);
        break;
      }
    }
  }, [size, theme]);

  return (
    <TypographyProvider>
      <StyledPill
        isRounded={isRounded}
        hasOnClick={!!onClick}
        color={color}
        size={numSize}
        fontSize={fontSize}
        iconSize={iconSize}
        padding={padding}
        onClick={onClick}
        hasText={!!text}
        theme={theme}
      >
        {icon && <Icon name={icon} size={IconSize.Small} color={IconColor.White} className="pill__icon" />}
        {text}
        {typeof onRemoveClick === 'function' && (
          <Icon
            className="pill__remove-icon"
            name={IconName.Close}
            onClick={onRemoveClick}
            size={IconSize.Small}
            color={IconColor.White}
          />
        )}
      </StyledPill>
    </TypographyProvider>
  );
};
