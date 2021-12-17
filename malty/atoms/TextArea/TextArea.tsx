import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import {
  StyledLabel,
  StyledtextArea,
  StyledTextAreaCharacterCounter,
  StyledTextareaContainer,
  StyledTextAreaWrapper
} from './TextArea.styled';
import { TextAreaProps } from './TextArea.types';

export const TextArea = ({ label, placeholder, resize, disabled, value, onValueChange }: TextAreaProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  const [textAreaCount, setTextAreaCount] = useState(0);
  const [rows, setRows] = useState(3);
  const [minRows] = useState(3);
  const [maxRows] = useState(8);

  const handleCarachterCounter = (e) => {
    const textareaLineHeight = 18;
    setTextAreaCount(e.target.value.length);
    onValueChange(e.target.value as string);

    const previousRows = e.target.rows;
    e.target.rows = minRows; // reset number of rows in textarea
    // eslint-disable-next-line no-bitwise
    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
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
        <StyledTextAreaWrapper theme={theme}>
          <StyledtextArea
            rows={rows}
            value={value}
            placeholder={placeholder}
            resize={resize}
            onChange={handleCarachterCounter}
            disabled={disabled}
            theme={theme}
          />
          <StyledTextAreaCharacterCounter theme={theme} data-testid="TextAreaCounter">
            {textAreaCount}
          </StyledTextAreaCharacterCounter>
        </StyledTextAreaWrapper>
      </StyledTextareaContainer>
    </TypographyProvider>
  );
};
