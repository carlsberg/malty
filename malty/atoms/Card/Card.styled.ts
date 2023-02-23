import styled, { css } from 'styled-components';
import { CardOrientation, CardStyle } from './Card.types';

export const StyledCardContainer = styled.div<{
  orientation: CardOrientation;
  selected: boolean;
  cardStyle: CardStyle;
  hover: boolean;
}>`
  display: flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  filter: brightness(100%);
  -webkit-filter: brightness(100%);

  ${({ orientation }) => {
    if (orientation === CardOrientation.Landscape) {
      return css`
        width: 100%;
        flex-direction: row;
      `;
    }
    return css`
      height: 100%;
      flex-direction: column;
    `;
  }};

  ${({ hover, cardStyle }) => {
    if (!hover) return null;

    if (cardStyle === CardStyle.Shadowed) {
      return css`
        cursor: pointer;
        &:hover {
          box-shadow: 0px 2px 12px 2px rgba(33, 40, 51, 0.15), 0px 1px 2px rgba(33, 40, 51, 0.15);
        }
        &:active {
          box-shadow: 0px 2px 6px rgba(33, 40, 51, 0.15), 0px 1px 2px rgba(33, 40, 51, 0.15);
        }
      `;
    }

    return css`
      cursor: pointer;
      &:hover {
        filter: brightness(95%);
        -webkit-filter: brightness(95%);
      }
      &:active {
        filter: brightness(90%);
        -webkit-filter: brightness(90%);
      }
    `;
  }}

  ${({ theme, cardStyle }) =>
    theme &&
    cardStyle === CardStyle.Outlined &&
    css`
      border: ${theme.borders['border-1px--solid']['border-width'].value}
        ${theme.borders['border-1px--solid']['border-style'].value} ${theme.colors.colours.support['40'].value};
    `}
  ${({ cardStyle }) =>
    cardStyle === CardStyle.Shadowed &&
    css`
      box-shadow: 0px 2px 6px 1px rgba(33, 40, 51, 0.1), 0px 1px 2px rgba(33, 40, 51, 0.15);
    `}

  ${({ theme, selected }) =>
    theme &&
    selected &&
    css`
      border: ${theme.borders['border-3px--solid']['border-width'].value}
        ${theme.borders['border-3px--solid']['border-style'].value} ${theme.colors.theme.themePrimary.value};
    `}
`;

export const StyledCardHero = styled.div<{
  orientation: CardOrientation;
}>`
  display: flex;
  align-items: stretch;
  position: relative;
  ${({ orientation }) => {
    if (orientation === CardOrientation.Landscape) {
      return css`
        width: 33.3% !important;
        > * {
          height: 100%;
        }
      `;
    }
    return css`
      > * {
        width: 100%;
      }
    `;
  }};
`;
export const StyledCardBody = styled.div<{
  orientation: CardOrientation;
}>`
  padding: ${({ theme }) => theme.sizes.xs.value};
  @media screen and (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    padding: ${({ theme }) => theme.sizes['2xs'].value};
  }
  ${({ orientation }) => {
    if (orientation === CardOrientation.Landscape) {
      return css`
        width: 66.7%;
      `;
    }
    return css`
      width: inherit;
    `;
  }};
`;
