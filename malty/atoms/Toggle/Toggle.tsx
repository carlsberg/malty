import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  StyledError,
  StyledInput,
  StyledLabel,
  StyledLabelWrapper,
  StyledSwitch,
  StyledToggleSwitch
} from './Toggle.styled';
import { ToggleProps } from './Toggle.types';

export const Toggle = ({
  disabled,
  onValueChange,
  label,
  checked = false,
  error,
  required = false,
  dataTestId,
  ...props
}: ToggleProps) => {
  const theme = defaultTheme;
  const [stateChecked, setStateChecked] = useState(checked);
  const id = useMemo(() => uuid(), []);

  const handleToggle = () => {
    onValueChange(!stateChecked);
  };
  useEffect(() => {
    setStateChecked(checked);
  }, [checked]);

  return (
    <TypographyProvider>
      <StyledLabelWrapper disabled={disabled} onClick={handleToggle} theme={theme}>
        <StyledToggleSwitch id={id} theme={theme}>
          <StyledInput
            data-testid={dataTestId}
            id={id}
            theme={theme}
            disabled={disabled}
            type="checkbox"
            checked={stateChecked}
            onChange={handleToggle}
            required={required}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          />
          <StyledSwitch id={id} theme={theme} disabled={disabled} className="switch" />
        </StyledToggleSwitch>

        <StyledLabel
          label={label}
          data-testid={`${dataTestId}-label`}
          required={required}
          htmlFor={id}
          disabled={disabled}
          theme={theme}
        />
      </StyledLabelWrapper>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </TypographyProvider>
  );
};
