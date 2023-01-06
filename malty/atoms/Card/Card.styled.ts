import styled, { css } from 'styled-components';
import { CardOrientation, CardStyle } from './Card.types';

export const StyledCardContainer = styled.div<{
  orientation: CardOrientation;
  selected: boolean;
  cardStyle: CardStyle;
}>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};

  ${({ theme, selected }) =>
    theme &&
    selected &&
    css`
      border: ${theme.borders['border-3px--solid']['border-width'].value}
        ${theme.borders['border-3px--solid']['border-style'].value}
        ${theme.colors.theme.themePrimary.value};
    `}

  ${({ theme, cardStyle }) =>
    theme &&
    cardStyle === CardStyle.Outlined &&
    css`
      border: ${theme.borders['border-1px--solid']['border-width'].value}
        ${theme.borders['border-1px--solid']['border-style'].value}
        ${theme.colors.colours.default['digital-black'].value};
    `}
     ${({ cardStyle }) =>
    cardStyle === CardStyle.Shadowed &&
    css`
      box-shadow: 0px 2px 6px 1px rgba(33, 40, 51, 0.1), 0px 1px 2px rgba(33, 40, 51, 0.15);
    `}
`;

export const StyledCardHero = styled.div<{
  orientation: CardOrientation;
}>`
  width: ${({ orientation }) => (orientation === CardOrientation.Portrait ? '100%' : '180px')};
`;
export const StyledCardBody = styled.div`
  padding: ${({ theme }) => theme.sizes.m.value};
`;
