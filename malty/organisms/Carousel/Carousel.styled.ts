import { Splide, SplideTrack } from '@splidejs/react-splide';
import styled, { css } from 'styled-components';

export const StyledSplide = styled(Splide)<{ innerSpacingX: boolean }>`
  padding: 0 ${({ theme, innerSpacingX }) => (innerSpacingX ? theme.sizes['2xs'].value : '0')};
`;

export const StyledSplideTrack = styled(SplideTrack)`
  padding-bottom: ${({ theme }) => theme.sizes['4xs'].value};
`;

export const StyledCustomSplideArrows = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  .splide__arrows {
    display: flex;
    justify-content: space-between;
  }

  + .splide__pagination {
    display: flex;
    padding: 0;
    column-gap: ${({ theme }) => theme.sizes.s.value};
    margin-top: ${({ theme }) => theme.sizes.xs.value};

    ${({ theme }) => css`
      @media screen and (max-width: ${theme.layout.small['device-max-width']?.value}) {
        column-gap: ${theme.sizes.l.value};
      }
    `}

    .splide__pagination__page {
      display: block;
      border: none;
      width: ${({ theme }) => theme.sizes['2xs'].value};
      height: ${({ theme }) => theme.sizes['2xs'].value};
      border-radius: 50%;
      padding: 0;
      background-color: ${({ theme }) => theme.colors.colours.overlay['digital-black'][25].value};

      &.is-active {
        background-color: ${({ theme }) => theme.colors.theme.themePrimary.value};
      }
    }
  }
`;
