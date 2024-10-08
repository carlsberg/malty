import { CloneIcon } from '@carlsberg/malty.atoms.base-icon';
import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
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
      padding={padding}
      hasText={hasText}
      hasIcon={!!icon}
      theme={theme}
      textColor={colorStyle}
      pillSize={size}
      gap={gap}
      isUppercase={hasText && isUppercase}
      {...props}
    >
      <CloneIcon icon={icon} color={colorStyle} size={iconSize} />
      {text}
    </StyledPill>
  );
};
