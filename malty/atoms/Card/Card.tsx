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
  onClick,
}: CardProps) {
  const theme = useContext(ThemeContext) || defaultTheme;

  const hover = !(onClick === undefined);

  return (
    <StyledCardContainer
      orientation={orientation}
      selected={selected}
      cardStyle={style}
      onClick={onClick}
      hover={hover}
    >
      <StyledCardHero orientation={orientation} hover={hover}>
        {cardHero}
      </StyledCardHero>
      <StyledCardBody>{cardBody}</StyledCardBody>
    </StyledCardContainer>
  );
}
