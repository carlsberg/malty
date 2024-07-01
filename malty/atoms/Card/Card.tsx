import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
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
  dataTestId = 'card-element',
  disabled,
  ...props
}: CardProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledCardContainer
      orientation={orientation}
      selected={selected}
      cardStyle={cardStyle}
      {...(!disabled && { onClick })}
      hover={!disabled && !!onClick}
      theme={theme}
      data-testid={dataTestId}
      disabled={disabled}
      {...props}
    >
      {cardHero && (
        <StyledCardHero orientation={orientation} theme={theme} data-testid={`${dataTestId}-hero`} disabled={disabled}>
          {cardHero}
        </StyledCardHero>
      )}
      {cardBody && (
        <StyledCardBody
          orientation={orientation}
          theme={theme}
          data-testid={`${dataTestId}-body`}
          $hasCardHero={!!cardHero}
        >
          {cardBody}
        </StyledCardBody>
      )}
    </StyledCardContainer>
  );
};
