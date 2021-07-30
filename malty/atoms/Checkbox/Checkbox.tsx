import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
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

export const Checkbox = ({ id, value, checked, labelText, error, onValueChange }: CheckboxProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledCheckboxContainer theme={theme}>
      <StyledCheckboxLabel htmlFor={id} theme={theme}>
        <StyledCheckboxHiddenInput
          id={id}
          value={value}
          onChange={(e) => onValueChange(!(e.target as HTMLInputElement).checked)}
          checked={checked}
          theme={theme}
        />
        <StyledCheckboxDisplayInput checked={checked} theme={theme} />
        <StyledCheckboxLabelText theme={theme}>{labelText}</StyledCheckboxLabelText>
      </StyledCheckboxLabel>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </StyledCheckboxContainer>
  );
};
