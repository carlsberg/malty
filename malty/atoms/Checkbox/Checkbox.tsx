import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledCheckboxContainer,
  StyledCheckboxDisplayInput,
  StyledCheckboxHiddenInput,
  StyledCheckboxLabel,
  StyledCheckboxLabelText,
  StyledError
} from './Checkbox.styled';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = ({
  id,
  value,
  checked,
  labelText,
  error,
  onValueChange,
  required = false,
  dataTestId
}: CheckboxProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <TypographyProvider>
      <StyledCheckboxContainer theme={theme}>
        <StyledCheckboxLabel required={required} htmlFor={id} theme={theme}>
          <StyledCheckboxHiddenInput
            data-testid={dataTestId}
            id={id}
            value={value}
            onChange={(e) => onValueChange(!(e.target as HTMLInputElement).checked)}
            checked={checked}
            theme={theme}
            required={required}
          />
          <StyledCheckboxDisplayInput checked={checked} theme={theme} />
          <StyledCheckboxLabelText data-testid={`${dataTestId}-label`} theme={theme}>
            {labelText}
          </StyledCheckboxLabelText>
        </StyledCheckboxLabel>
        {error && <StyledError theme={theme}>{error}</StyledError>}
      </StyledCheckboxContainer>
    </TypographyProvider>
  );
};
