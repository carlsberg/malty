import { space } from '@carlsberggroup/malty.utils.space';
import styled, { css } from 'styled-components';
import { CardOrientation, CardStyle, StyledCardContainerProps } from './Card.types';

export const StyledCardContainer = styled.div<StyledCardContainerProps>`
  display: flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  filter: brightness(100%);
  -webkit-filter: brightness(100%);

  ${({ orientation }) => {
    if (orientation === CardOrientation.Landscape) {
      return css`
        width: 100%;
        height: 100%;
        flex-direction: row;
      `;
    }
    return css`
      height: 100%;
      flex-direction: column;
    `;
  }};

  ${({ theme, hover, cardStyle }) => {
    if (!hover) return null;

    if (cardStyle === CardStyle.Shadowed) {
      return css`
        cursor: pointer;
        &:hover {
          box-shadow: ${theme.shadows.hovered.value};
        }
        &:active {
          box-shadow: ${theme.shadows.pressed.value};
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
  ${({ theme, cardStyle }) =>
    cardStyle === CardStyle.Shadowed &&
    css`
      box-shadow: ${theme.shadows.resting.value};
    `}

  ${({ theme, selected }) =>
    selected &&
    css`
      border: ${theme.borders['border-3px--solid']['border-width'].value}
        ${theme.borders['border-3px--solid']['border-style'].value} ${theme.colors.theme.themePrimary.value};
    `};

  ${({ theme, disabled }) =>
    disabled &&
    css`
      border-color: ${theme.colors.colours.system['disable-light-theme'].value};
    `}

  ${space}
`;

export const StyledCardHero = styled.div<{
  orientation: CardOrientation;
  disabled?: boolean;
}>`
  display: flex;
  align-items: stretch;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 'initial')};

  ${({ orientation }) => {
    if (orientation === CardOrientation.Landscape) {
      return css`
        width: 33.3%;
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
