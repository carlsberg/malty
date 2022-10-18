import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { RadioProps } from '.';
import { StyledError, StyledLabel, StyledRadio, StyledRadioContainer } from './Radio.styled';

export const Radio = ({ value, label, onValueChange, selected, error, name, disabled, ...props }: RadioProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useRef<string>(uuid());

  const handleValueChange = (e: { target: { value: string | number } }) => {
    onValueChange(e.target.value);
  };

  return (
    <>
      <StyledRadioContainer theme={theme}>
        <StyledRadio
          id={id.current}
          checked={selected}
          value={value}
          theme={theme}
          type="radio"
          name={name}
          onChange={handleValueChange}
          disabled={disabled}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
        <StyledLabel htmlFor={id.current} disabled={disabled} theme={theme}>
          {label}
        </StyledLabel>
      </StyledRadioContainer>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </>
  );
};
