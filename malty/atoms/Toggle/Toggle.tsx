import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import { isolateSpaceProps } from '@carlsberg/malty.utils.space';
import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  StyledError,
  StyledInput,
  StyledLabel,
  StyledLabelWrapper,
  StyledSwitch,
  StyledToggleSwitch,
  StyledWrapper
} from './Toggle.styled';
import { ToggleProps } from './Toggle.types';

export const Toggle = ({
  disabled,
  onValueChange,
  label,
  checked = false,
  error,
  required = false,
  dataTestId = 'toggle',
  ...props
}: ToggleProps) => {
  const theme = defaultTheme;
  const [stateChecked, setStateChecked] = useState(checked);
  const id = useMemo(() => uuid(), []);
  const { spaceProps, restProps } = isolateSpaceProps(props);

  const handleToggle = () => {
    onValueChange(!stateChecked);
  };
  useEffect(() => {
    setStateChecked(checked);
  }, [checked]);

  return (
    <StyledWrapper data-testid={dataTestId} {...spaceProps}>
      <StyledLabelWrapper disabled={disabled} onClick={handleToggle} theme={theme}>
        <StyledToggleSwitch id={id} theme={theme}>
          <StyledInput
            data-testid={`${dataTestId}-input`}
            id={id}
            theme={theme}
            disabled={disabled}
            type="checkbox"
            checked={stateChecked}
            onChange={handleToggle}
            required={required}
            {...restProps}
          />
          <StyledSwitch id={id} theme={theme} disabled={disabled} />
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
    </StyledWrapper>
  );
};
