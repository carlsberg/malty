import React from 'react';
import { Paragraph } from './Text.styled';
import { TextProps } from './Text.types';

export const Text = ({ size, weight, align, color, content }: TextProps) => (
  <Paragraph size={size} weight={weight} align={align} color={color}>
    {content}
  </Paragraph>
);
