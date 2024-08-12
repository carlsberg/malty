import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledLabel } from './Label.styled';
import { LabelProps } from './Label.types';

export const Label = ({ htmlFor, label, dataTestId, required, disabled, ...props }: LabelProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return label ? (
    <StyledLabel
      data-testid={dataTestId}
      theme={theme}
      htmlFor={htmlFor}
      required={required}
      disabled={disabled}
      {...props}
    >
      {label}
    </StyledLabel>
  ) : null;
};
