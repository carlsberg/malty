import { Chip, ChipSize } from '@carlsberg/malty.atoms.chip';
import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledDivider, StyledSegmentedControl } from './SegmentedControl.styled';
import { SegmentedControlProps, SegmentedControlSize } from './SegmentedControl.types';

export const SegmentedControl = ({
  options,
  size,
  dataQaId,
  disabled = false,
  selected = options[0].value,
  onChange,
  ...props
}: SegmentedControlProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [chipSize, setchipSize] = useState(ChipSize.Medium);

  const handleOnChange = (value: string) => {
    onChange?.(value);
  };

  useEffect(() => {
    switch (size) {
      case SegmentedControlSize.XSmall: {
        setchipSize(ChipSize.XSmall);
        break;
      }
      case SegmentedControlSize.Small: {
        setchipSize(ChipSize.Small);
        break;
      }
      default: {
        setchipSize(ChipSize.Medium);
        break;
      }
    }
  }, [size, theme]);

  return (
    <StyledSegmentedControl data-testid={dataQaId} theme={theme} {...props}>
      {options.map((option, index) => (
        <React.Fragment key={option.value}>
          <Chip
            dataTestId={`${dataQaId}-chip-${index}`}
            disabled={disabled}
            size={chipSize}
            selected={option.value === selected}
            label={option.label}
            onChange={() => handleOnChange(option.value)}
          />
          {index !== options.length - 1 && <StyledDivider theme={theme} disabled={disabled} />}
        </React.Fragment>
      ))}
    </StyledSegmentedControl>
  );
};
