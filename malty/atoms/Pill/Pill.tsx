import { CloneIcon } from '@carlsberggbs/malty.atoms.base-icon';
import React from 'react';
import { useIconColor, usePillBackgroundColor, usePillStyles, useTextColor } from './Pill.helper';
import { StyledPill } from './Pill.styled';
import { IconPosition, PillProps, PillSize, PillType } from './Pill.types';

export const Pill = ({
  text,
  icon,
  type = PillType.Primary,
  size = PillSize.Medium,
  iconPosition = IconPosition.Leading,
  isUppercase = false,
  dataTestId,
  ...props
}: PillProps) => {
  const { fontSize, iconSize, gap, numSize, fontWeight, lineHeight, padding } = usePillStyles({ size });
  const textColor = useTextColor({ type });
  const iconColor = useIconColor({ type });
  const backgroundColor = usePillBackgroundColor({ type });
  const hasText = !!text;
  const renderedIcon = <CloneIcon icon={icon} color={iconColor} size={iconSize} />;

  return (
    <StyledPill
      data-testid={dataTestId}
      $size={numSize}
      $padding={padding}
      $fontSize={fontSize}
      $hasText={hasText}
      $hasIcon={!!icon}
      $textColor={textColor}
      $pillSize={size}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      $gap={gap}
      $backgroundColor={backgroundColor}
      $isUppercase={hasText && isUppercase}
      {...props}
    >
      {icon && iconPosition === IconPosition.Leading && renderedIcon}
      {text}
      {icon && iconPosition === IconPosition.Trailing && renderedIcon}
    </StyledPill>
  );
};
