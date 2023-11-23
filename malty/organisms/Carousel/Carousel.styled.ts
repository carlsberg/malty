import { srOnly } from '@carlsberggroup/malty.utils.mixins';
import { space, SpaceProps } from '@carlsberggroup/malty.utils.space';
import styled, { css } from 'styled-components';

export const StyledSplide = styled.section<{ innerSpacingX: boolean } & SpaceProps>`
  position: relative;
  padding: 0 ${({ theme, innerSpacingX }) => (innerSpacingX ? theme.sizes['2xs'].value : '0')};

  .splide__list {
    backface-visibility: hidden;
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .splide__pagination {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    pointer-events: none;
  }
  .splide__pagination li {
    display: inline-block;
    line-height: 1;
    list-style-type: none;
    margin: 0;
    pointer-events: auto;
  }
  .splide:not(.is-overflow) .splide__pagination {
    display: none;
  }
  .splide {
    position: relative;
    visibility: hidden;
  }
  .splide.is-initialized,
  .splide.is-rendered {
    visibility: visible;
  }
  .splide__slide {
    backface-visibility: hidden;
    box-sizing: border-box;
    flex-shrink: 0;
    list-style-type: none;
    margin: 0;
    position: relative;
  }
  .splide__slide img {
    vertical-align: bottom;
  }
  .splide__sr {
    ${srOnly}
  }
  .splide__track {
    overflow: hidden;
    position: relative;
    z-index: 0;
  }
  .splide__track--draggable {
    user-select: none;
  }

  ${space}
`;

export const StyledSplideTrack = styled.div`
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
