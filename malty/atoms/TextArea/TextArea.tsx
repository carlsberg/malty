import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import {
  StyledError,
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
  resize,
  disabled,
  value,
  onValueChange,
  error,
  maxLength,
  ...props
}: TextAreaProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  const [textAreaCount, setTextAreaCount] = useState(0);

  const handleCarachterCounter = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setTextAreaCount(e.currentTarget.value.length);
    onValueChange(e.currentTarget.value as string);
  };

  return (
    <TypographyProvider>
      <StyledTextareaContainer theme={theme}>
        {label && (
          <StyledLabel htmlFor={id} theme={theme}>
            {label}
          </StyledLabel>
        )}
        <StyledTextAreaWrapper disabled={disabled} isError={!!error} resize={resize} theme={theme}>
          <StyledtextArea
            name={id}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={handleCarachterCounter}
            theme={theme}
            disabled={disabled}
            maxLength={maxLength}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          />
          <StyledTextAreaCharacterCounter theme={theme} data-testid="TextAreaCounter">
            {textAreaCount}
          </StyledTextAreaCharacterCounter>
        </StyledTextAreaWrapper>
        {error && <StyledError theme={theme}>{error}</StyledError>}
      </StyledTextareaContainer>
    </TypographyProvider>
  );
};
