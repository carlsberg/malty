import { Icon, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useIconTextColor, usePillStyles } from './Pill.helper';
import { StyledPill, StyledText } from './Pill.styled';
import { PillColor, PillProps, PillSize } from './Pill.types';

export function Pill({
  text,
  icon,
  color = PillColor.Primary,
  size = PillSize.Medium,
  dataTestId,
}: PillProps) {
  const theme = useContext(ThemeContext) || defaultTheme;
  const { fontSize, fontFamily, iconSize, marginText, numSize, padding } = usePillStyles({ size });
  const colorStyle = useIconTextColor({ color });

  return (
    <StyledPill
      data-testid={dataTestId}
      color={color}
      size={numSize}
      fontSize={fontSize}
      fontFamily={fontFamily}
      iconSize={iconSize}
      padding={padding}
      hasText={!!text}
      theme={theme}
      textColor={colorStyle}
      pillSize={size}
    >
      {icon && (
        <Icon
          data-testid={`${dataTestId}-icon`}
          name={icon}
          size={IconSize.Small}
          color={colorStyle}
          className="pill__icon"
        />
      )}
      <StyledText
        data-testid={`${dataTestId}-text`}
        theme={theme}
        marginText={marginText}
        hasText={!!text}
      >
        {text}
      </StyledText>
    </StyledPill>
  );
}
