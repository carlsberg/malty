import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import {
  StyledError,
  StyledHint,
  StyledLabel,
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
  dataTestId,
  ...props
}: TextAreaProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  const [textAreaCount, setTextAreaCount] = useState(maxLength || 0);

  const handleCarachterCounter = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (maxLength) {
      setTextAreaCount(maxLength - e.currentTarget.value.length);
    } else {
      setTextAreaCount(e.currentTarget.value.length);
    }
    onValueChange(e.currentTarget.value as string);
  };

  return (
    <TypographyProvider>
      <StyledTextareaContainer theme={theme}>
        {label && (
          <StyledLabel data-testid={`${dataTestId}-label`} disabled={disabled} htmlFor={id} theme={theme}>
            {label}
          </StyledLabel>
        )}
        <StyledTextAreaWrapper
          data-testid={`${dataTestId}-container`}
          readOnly={readOnly}
          disabled={disabled}
          isError={!!error}
          resize={resize}
          theme={theme}
        >
          <StyledtextArea
            data-testid={`${dataTestId}`}
            name={id}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={handleCarachterCounter}
            theme={theme}
            disabled={disabled}
            readOnly={readOnly}
            maxLength={maxLength}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          />
          <StyledTextAreaCharacterCounter disabled={disabled} theme={theme} data-testid={`${dataTestId}-counter`}>
            {textAreaCount}
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
    </TypographyProvider>
  );
};
