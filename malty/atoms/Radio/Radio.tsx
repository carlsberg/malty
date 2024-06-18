import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
import { isolateSpaceProps } from '@carlsberggbs/malty.utils.space';
import React, { useContext, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { RadioProps } from '.';
import { StyledError, StyledLabel, StyledRadio, StyledRadioContainer, StyledWrapper } from './Radio.styled';

export const Radio = ({
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
  const id = useRef<string>(uuid());
  const { spaceProps, restProps } = isolateSpaceProps(props);

  const handleValueChange = (e: { target: { value: string | number } }) => {
    if (!readOnly && onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <StyledWrapper {...spaceProps}>
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
          readOnly={readOnly}
          {...restProps}
        />
        <StyledLabel
          label={label}
          data-testid={`${dataTestId}-label`}
          required={required}
          htmlFor={id.current}
          disabled={disabled}
          theme={theme}
          $readOnly={readOnly}
        />
      </StyledRadioContainer>
      {error && <StyledError theme={theme}>{error}</StyledError>}
    </StyledWrapper>
  );
};
