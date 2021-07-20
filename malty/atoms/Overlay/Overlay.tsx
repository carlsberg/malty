import React from 'react';
import { OverlayProps } from '.';
import { StyledOverlay } from './Overlay.styled';

export const Overlay = ({ content, isWhite = false }: OverlayProps) => (
  <StyledOverlay isWhite={isWhite}>{content}</StyledOverlay>
);
