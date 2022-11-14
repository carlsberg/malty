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

export const Checkbox = ({
  id,
  value = '',
  checked = false,
  labelText,
  error,
  onValueChange,
  required = false,
  dataTestId,
  isIndeterminate,
  ...props
}: CheckboxProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledCheckboxContainer theme={theme}>
      <StyledCheckboxLabel required={required} htmlFor={id} theme={theme}>
        <StyledCheckboxHiddenInput
          type="checkbox"
          data-testid={dataTestId}
          id={id}
          value={value}
          onChange={(e) => onValueChange(e)}
          checked={checked}
          theme={theme}
          required={required}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
        <StyledCheckboxDisplayInput indeterminate={isIndeterminate} checked={checked} theme={theme} />
        <StyledCheckboxLabelText data-testid={`${dataTestId}-label`} theme={theme}>
          {labelText}
        </StyledCheckboxLabelText>
      </StyledCheckboxLabel>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </StyledCheckboxContainer>
  );
};
