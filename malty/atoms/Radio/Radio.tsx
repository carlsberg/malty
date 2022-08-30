import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { RadioProps } from '.';
import { StyledError, StyledLabel, StyledRadio, StyledRadioContainer } from './Radio.styled';

export const Radio = ({
  value,
  label,
  onValueChange,
  selected,
  error,
  name,
  disabled,
  required = false,
  ...props
}: RadioProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const handleValueChange = (e: { target: { value: string | number } }) => {
    onValueChange(e.target.value);
  };

  return (
    <TypographyProvider>
      <StyledRadioContainer theme={theme}>
        <StyledRadio
          id={value.toString()}
          checked={selected}
          value={value}
          theme={theme}
          type="radio"
          name={name}
          onChange={handleValueChange}
          disabled={disabled}
          required={required}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
        <StyledLabel required={required} htmlFor={value.toString()} disabled={disabled} theme={theme}>
          {label}
        </StyledLabel>
      </StyledRadioContainer>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </TypographyProvider>
  );
};
