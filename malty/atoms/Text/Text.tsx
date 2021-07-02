import React from 'react';
import { StyledParagraph } from './Text.styled';
import { TextProps } from './Text.types';

export const Text = ({ size, weight, align, color, content }: TextProps) => (
  <StyledParagraph size={size} weight={weight} align={align} color={color}>
    {content}
  </StyledParagraph>
);
