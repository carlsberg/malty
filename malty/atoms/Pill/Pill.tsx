import { Icon, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useIconTextColor, usePillStyles } from './Pill.helper';
import { StyledPill } from './Pill.styled';
import { PillColor, PillProps, PillSize } from './Pill.types';

export const Pill = ({
  text,
  icon,
  color = PillColor.Primary,
  size = PillSize.Medium,
  badgeMode = false,
  dataTestId
}: PillProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const { fontSize, fontFamily, iconSize, gap, numSize, padding } = usePillStyles({ size });
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
      hasIcon={!!icon}
      badgeMode={badgeMode}
      theme={theme}
      textColor={colorStyle}
      pillSize={size}
      gap={gap}
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
      {text}
    </StyledPill>
  );
};
