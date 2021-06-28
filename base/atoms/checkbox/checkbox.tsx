import React from 'react';
import {
  StyledCheckboxContainer,
  StyledCheckboxDisplayInput,
  StyledCheckboxHiddenInput,
  StyledCheckboxLabel,
  StyledCheckboxLabelText,
  StyledError
} from './checkbox.styled';
import { CheckboxProps } from './checkbox.types';

export const Checkbox = ({ id, value, checked, labelText, error, onValueChange }: CheckboxProps) => (
  <StyledCheckboxContainer>
    <StyledCheckboxLabel htmlFor={id}>
      <StyledCheckboxHiddenInput
        id={id}
        value={value}
        onChange={(e) => onValueChange(!(e.target as HTMLInputElement).checked)}
        checked={checked}
      />
      <StyledCheckboxDisplayInput checked={checked} />
      <StyledCheckboxLabelText>{labelText}</StyledCheckboxLabelText>
    </StyledCheckboxLabel>
    {error && <StyledError>{error}</StyledError>}
  </StyledCheckboxContainer>
);
