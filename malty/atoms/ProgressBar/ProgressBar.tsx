import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledBarContainer,
  StyledProgressAmount,
  StyledProgressBar,
  StyledText,
  StyledWrapper
} from './ProgressBar.styled';
import { ProgressBarProps, ProgressBarSize } from './ProgressBar.types';

export const ProgressBar = ({
  progress,
  label,
  displayAmount,
  disabled = false,
  size = ProgressBarSize.Medium,
  dataTestId
}: ProgressBarProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledWrapper theme={theme} data-testid={dataTestId}>
      <StyledBarContainer theme={theme}>
        <StyledProgressBar theme={theme} progress={progress} size={size} disabled={disabled} />
        {displayAmount ? (
          <StyledProgressAmount theme={theme} disabled={disabled}>
            {progress}%
          </StyledProgressAmount>
        ) : null}
      </StyledBarContainer>
      {label ? (
        <StyledText theme={theme} disabled={disabled}>
          {label}
        </StyledText>
      ) : null}
    </StyledWrapper>
  );
};
