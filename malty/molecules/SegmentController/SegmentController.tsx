import { Chip, ChipSize } from '@carlsberggroup/malty.atoms.chip';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledDivider, StyledSegmentController } from './SegmentController.styled';
import { SegmentControllerProps, SegmentControllerSize } from './SegmentController.types';

export const SegmentController = ({
  options,
  size,
  dataQaId,
  disabled = false,
  selected = options[0].value,
  onChange = () => null
}: SegmentControllerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [chipSize, setchipSize] = useState(ChipSize.Medium);

  const handleOnChange = (value: string) => {
    onChange(value);
  };

  useEffect(() => {
    switch (size) {
      case SegmentControllerSize.XSmall: {
        setchipSize(ChipSize.XSmall);
        break;
      }
      case SegmentControllerSize.Small: {
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
    <>
      <StyledSegmentController data-testid={dataQaId} theme={theme}>
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
      </StyledSegmentController>
    </>
  );
};
