import React from 'react';
import { OverlayProps } from '.';
import { StyledOverlay } from './Overlay.styled';

export const Overlay = ({ content, isWhite }: OverlayProps) => (
  <StyledOverlay isWhite={isWhite}>{content}</StyledOverlay>
);
