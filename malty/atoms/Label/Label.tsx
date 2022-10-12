import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledLabel } from './Label.styled';
import { LabelProps } from './Label.types';

export const Label = ({ htmlFor, label, dataTestId, required, disabled, ...props }: LabelProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <TypographyProvider>
      {label && (
        <StyledLabel
          data-testid={dataTestId}
          theme={theme}
          htmlFor={htmlFor}
          required={required}
          disabled={disabled}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          {label}
        </StyledLabel>
      )}
    </TypographyProvider>
  );
};
