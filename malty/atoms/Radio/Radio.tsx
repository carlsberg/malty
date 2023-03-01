import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { RadioProps } from '.';
import { StyledError, StyledLabel, StyledRadio, StyledRadioContainer } from './Radio.styled';

export function Radio({
  value,
  label,
  onValueChange,
  selected,
  error,
  name,
  disabled,
  required = false,
  dataTestId,
  ...props
}: RadioProps) {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useRef<string>(uuid());

  const handleValueChange = (e: { target: { value: string | number } }) => {
    onValueChange(e.target.value);
  };

  return (
    <>
      <StyledRadioContainer theme={theme}>
        <StyledRadio
          data-testid={dataTestId}
          id={id.current}
          checked={selected}
          value={value}
          theme={theme}
          type="radio"
          name={name}
          onChange={handleValueChange}
          disabled={disabled}
          required={required}
          {...props}
        />
        <StyledLabel
          label={label}
          data-testid={`${dataTestId}-label`}
          required={required}
          htmlFor={id.current}
          disabled={disabled}
          theme={theme}
        />
      </StyledRadioContainer>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </>
  );
}
