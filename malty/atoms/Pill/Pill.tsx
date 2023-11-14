import { Icon, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useIconTextColor, usePillStyles } from './Pill.helper';
import { StyledPill } from './Pill.styled';
import { PillProps, PillSize, PillType } from './Pill.types';

export const Pill = ({
  text,
  icon,
  type = PillType.Primary,
  size = PillSize.Medium,
  badgeMode = false,
  isUppercase = false,
  dataTestId,
  ...props
}: PillProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const { fontSize, fontFamily, iconSize, gap, numSize, padding } = usePillStyles({ size });
  const colorStyle = useIconTextColor({ type });
  const hasText = !!text;

  return (
    <StyledPill
      data-testid={dataTestId}
      type={type}
      size={numSize}
      fontSize={fontSize}
      fontFamily={fontFamily}
      iconSize={iconSize}
      padding={padding}
      hasText={hasText}
      hasIcon={!!icon}
      badgeMode={badgeMode}
      theme={theme}
      textColor={colorStyle}
      pillSize={size}
      gap={gap}
      isUppercase={hasText && isUppercase}
      {...props}
    >
      {icon && <Icon name={icon} size={IconSize.Small} color={colorStyle} className="pill__icon" />}
      {text}
    </StyledPill>
  );
};
