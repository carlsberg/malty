import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledCardBody, StyledCardContainer, StyledCardHero } from './Card.styled';
import { CardOrientation, CardProps, CardStyle } from './Card.types';

export const Card = ({
  orientation = CardOrientation.Portrait,
  selected = false,
  cardStyle = CardStyle.Plain,
  cardHero,
  cardBody,
  onClick,
  dataTestId = 'card-element'
}: CardProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledCardContainer
      orientation={orientation}
      selected={selected}
      cardStyle={cardStyle}
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
        <StyledCardBody orientation={orientation} theme={theme} data-testid={`${dataTestId}-body`}>
          {cardBody}
        </StyledCardBody>
      )}
    </StyledCardContainer>
  );
};
