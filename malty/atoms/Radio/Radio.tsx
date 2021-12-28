import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledError, StyledLabel, StyledRadio, StyledRadioContainer } from './Radio.styled';
import { RadioProps } from './Radio.types';

export const Radio = ({ value, labelText, onValueChange, selected, error, name }: RadioProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const handleValueChange = (e: { target: { value: string | number } }) => {
    onValueChange(e.target.value);
  };

  return (
    <TypographyProvider>
      <StyledRadioContainer theme={theme}>
        <StyledRadio
          checked={selected}
          value={value}
          theme={theme}
          type="radio"
          name={name}
          onChange={handleValueChange}
        />
        <StyledLabel theme={theme}>{labelText}</StyledLabel>
      </StyledRadioContainer>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </TypographyProvider>
  );
};
