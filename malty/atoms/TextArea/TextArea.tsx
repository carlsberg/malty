import { Label } from '@carlsberggbs/malty.atoms.label';
import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
import { isolateSpaceProps } from '@carlsberggbs/malty.utils.space';
import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import {
  StyledError,
  StyledHint,
  StyledtextArea,
  StyledTextAreaCharacterCounter,
  StyledTextareaContainer,
  StyledTextAreaWrapper
} from './TextArea.styled';
import { TextAreaProps } from './TextArea.types';

export const TextArea = ({
  label,
  placeholder,
  resize = false,
  disabled = false,
  value,
  onValueChange,
  error,
  maxLength,
  hint,
  readOnly = false,
  dataTestId = 'text-area',
  required = false,
  ...props
}: TextAreaProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  const valueCounter = value?.length ?? 0;
  const textAreaCounter = maxLength ? maxLength - valueCounter : valueCounter;
  const { spaceProps, restProps } = isolateSpaceProps(props);

  const handleOnValueChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const currentValue = event.currentTarget.value;
    onValueChange(currentValue);
  };

  return (
    <StyledTextareaContainer theme={theme} data-testid={dataTestId} {...spaceProps}>
      <Label label={label} required={required} data-testid={`${dataTestId}-label`} disabled={disabled} htmlFor={id} />
      <StyledTextAreaWrapper
        data-testid={`${dataTestId}-container`}
        readOnly={readOnly}
        disabled={disabled}
        $isError={!!error}
        resize={resize}
        theme={theme}
      >
        <StyledtextArea
          data-testid={`${dataTestId}-input`}
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={handleOnValueChange}
          theme={theme}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          required={required}
          $isError={!!error}
          {...restProps}
        />
        <StyledTextAreaCharacterCounter
          disabled={disabled}
          $isError={!!error}
          theme={theme}
          data-testid={`${dataTestId}-counter`}
        >
          {textAreaCounter}
        </StyledTextAreaCharacterCounter>
      </StyledTextAreaWrapper>
      {error && (
        <StyledError data-testid={`${dataTestId}-error-label`} theme={theme}>
          {error}
        </StyledError>
      )}
      {hint && !error && (
        <StyledHint data-testid={`${dataTestId}-hint-label`} disabled={disabled} theme={theme}>
          {hint}
        </StyledHint>
      )}
    </StyledTextareaContainer>
  );
};
