import React from 'react';
import { Paragraph } from './text.styled';
import { TextProps } from './text.types';

export const Text = ({ size, weight, align, color, content }: TextProps) => (
  <Paragraph size={size} weight={weight} align={align} color={color}>
    {content}
  </Paragraph>
);
