import React from 'react';
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
  return (
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
};
