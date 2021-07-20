import React from 'react';
import {
  StyledBarContainer,
  StyledProgressAmount,
  StyledProgressBar,
  StyledText,
  StyledWrapper
} from './ProgressBar.styled';
import { ProgressBarProps } from './ProgressBar.types';

export const ProgressBar = ({ progress, label, displayAmount }: ProgressBarProps) => (
  <StyledWrapper>
    <StyledBarContainer>
      <StyledProgressBar progress={progress} />
      {displayAmount && <StyledProgressAmount>{progress}%</StyledProgressAmount>}
    </StyledBarContainer>
    {label && <StyledText>{label}</StyledText>}
  </StyledWrapper>
);
