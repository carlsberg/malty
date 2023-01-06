import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledCardBody, StyledCardContainer, StyledCardHero } from './Card.styled';
import { CardOrientation, CardProps, CardStyle } from './Card.types';

export function Card({
  orientation = CardOrientation.Portrait,
  selected = false,
  style = CardStyle.Plain,
  cardHero,
  cardBody,
}: CardProps) {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledCardContainer orientation={orientation} selected={selected} cardStyle={style}>
      <StyledCardHero orientation={orientation}>{cardHero}</StyledCardHero>
      <StyledCardBody>{cardBody}</StyledCardBody>
    </StyledCardContainer>
  );
}
