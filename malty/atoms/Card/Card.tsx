import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledCardBody, StyledCardContainer, StyledCardHero } from './Card.styled';
import { CardOrientation, CardProps, CardStyle } from './Card.types';

export function Card({
  orientation = CardOrientation.Portrait,
  selected = false,
  disabled = false,
  style = CardStyle.Plain,
  cardHero,
  cardBody,
  onClick,
  dataTestId = 'card-element',
}: CardProps) {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledCardContainer
      orientation={orientation}
      selected={selected}
      disabled={disabled}
      cardStyle={style}
      onClick={onClick}
      hover={!!onClick}
      theme={theme}
      data-testid={dataTestId}
    >
      {cardHero && (
        <StyledCardHero orientation={orientation} theme={theme} data-testid={`${dataTestId}-hero`}>
          {cardHero}
        </StyledCardHero>
      )}
      {cardBody && (
        <StyledCardBody theme={theme} data-testid={`${dataTestId}-body`}>
          {cardBody}
        </StyledCardBody>
      )}
    </StyledCardContainer>
  );
}
