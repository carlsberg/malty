import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledBarContainer,
  StyledProgressAmount,
  StyledProgressBar,
  StyledText,
  StyledWrapper,
} from './ProgressBar.styled';
import { ProgressBarProps } from './ProgressBar.types';

export function ProgressBar({ progress, label, displayAmount }: ProgressBarProps) {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledWrapper theme={theme}>
      <StyledBarContainer theme={theme}>
        <StyledProgressBar progress={progress} theme={theme} />
        {displayAmount && <StyledProgressAmount theme={theme}>{progress}%</StyledProgressAmount>}
      </StyledBarContainer>
      {label && <StyledText theme={theme}>{label}</StyledText>}
    </StyledWrapper>
  );
}
