import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { RadioProps } from '.';
import { StyledError, StyledLabel, StyledRadio, StyledRadioContainer } from './Radio.styled';

export const Radio = ({
  id,
  value,
  label,
  onValueChange,
  selected,
  error,
  name,
  disabled,
  required = false,
  dataTestId,
  readOnly,
  ...props
}: RadioProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const handleValueChange = (e: { target: { value: string | number } }) => {
    if (!readOnly && onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <>
      <StyledRadioContainer theme={theme}>
        <StyledRadio
          data-testid={dataTestId}
          id={id}
          defaultChecked={selected}
          value={value}
          theme={theme}
          type="radio"
          name={name}
          onChange={handleValueChange}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          {...props}
        />
        <StyledLabel
          label={label}
          data-testid={`${dataTestId}-label`}
          required={required}
          htmlFor={id}
          disabled={disabled}
          theme={theme}
          $readOnly={readOnly}
        />
      </StyledRadioContainer>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </>
  );
};
