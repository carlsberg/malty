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
  const [rows, setRows] = useState(3);
  const [minRows] = useState(3);
  const [maxRows] = useState(6);

  const handleCarachterCounter = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = 18;
    setTextAreaCount(e.currentTarget.value.length);
    onValueChange(e.currentTarget.value as string);

    const previousRows = e.currentTarget.rows;
    e.currentTarget.rows = minRows; // reset number of rows in textarea
    // eslint-disable-next-line no-bitwise
    const currentRows = ~~(e.currentTarget.scrollHeight / textareaLineHeight) - 1;

    if (currentRows === previousRows) {
      e.currentTarget.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.currentTarget.rows = maxRows;
      e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
    }
    setRows(currentRows < maxRows ? currentRows : maxRows);
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
            rows={rows}
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
