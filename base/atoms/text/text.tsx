import React from 'react';
import { Paragraph } from './text.styled';
import { Align, Color, Size, Weight } from './text.types';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: Size;
  weight?: Weight;
  align?: Align;
  color?: Color;
  content?: string;
}

export const Text = ({ size, weight, align, color, content }: TextProps) => (
  <Paragraph size={size} weight={weight} align={align} color={color}>
    {content}
  </Paragraph>
);
