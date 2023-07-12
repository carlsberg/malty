import styled, { css } from 'styled-components';

export const StyledSplide = styled.section<{ innerSpacingX: boolean }>`
  position: relative;
  padding: 0 ${({ theme, innerSpacingX }) => (innerSpacingX ? theme.sizes['2xs'].value : '0')};

  @keyframes splide-loading {
    0% {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }
  .splide__list {
    backface-visibility: hidden;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
  }
  .splide__pagination {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: center;
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
    -ms-flex-negative: 0;
    flex-shrink: 0;
    list-style-type: none !important;
    margin: 0;
    position: relative;
  }
  .splide__slide img {
    vertical-align: bottom;
  }
  .splide__sr {
    clip: rect(0 0 0 0);
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .splide__track {
    overflow: hidden;
    position: relative;
    z-index: 0;
  }
  .splide__track--draggable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
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
