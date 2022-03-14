import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledError,
  StyledInput,
  StyledLabel,
  StyledLabelWrapper,
  StyledSwitch,
  StyledToggleSwitch
} from './Toggle.styled';
import { ToggleProps } from './Toggle.types';

export const Toggle = ({ disabled, onValueChange, label, checked, error, ...props }: ToggleProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  return (
    <TypographyProvider>
      <StyledLabelWrapper theme={theme}>
        <StyledToggleSwitch theme={theme}>
          <StyledInput
            theme={theme}
            disabled={disabled}
            type="checkbox"
            checked={checked}
            onChange={(e) => onValueChange(!(e.target as HTMLInputElement).checked)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          />
          <StyledSwitch theme={theme} disabled={disabled} className="switch" />
        </StyledToggleSwitch>

        <StyledLabel theme={theme} disabled={disabled}>
          {label}
        </StyledLabel>
      </StyledLabelWrapper>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </TypographyProvider>
  );
};
