import { space } from '@carlsberg/malty.utils.space';
import styled, { css } from 'styled-components';
import { BannerLayout, StyledBannerContainerProps } from './Banner.types';

export const StyledBannerContainer = styled.div<StyledBannerContainerProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  position: relative;
  min-height: 460px;
  width: 100%;

  ${({ theme, negative }) => {
    if (negative) {
      return css`
        background-color: ${theme.colors.colours.default['digital-black'].value};
      `;
    }
    return css`
      background-color: ${theme.colors.colours.support['20'].value};
    `;
  }};

  @media (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  }

  ${space}
`;

export const StyledBannerImage = styled.div<{
  layout: BannerLayout;
  negative: boolean;
  imageSrc: string;
  imageHeight?: string;
}>`
  ${({ theme, negative, imageSrc, layout }) => {
    if (layout !== BannerLayout.Full) {
      return css`
        background: url(${imageSrc});
      `;
    }
    const overlay = negative
      ? theme.colors.colours.overlay['digital-black'][50].value
      : theme.colors.colours.overlay.white[50].value;
    let background = `linear-gradient(${overlay}, ${overlay})`;
    if (imageSrc) {
      background += `, url(${imageSrc})`;
    }
    return css`
      background: ${background};
    `;
  }}

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ layout }) => {
    switch (layout) {
      case BannerLayout.Third:
        return css`
          width: 33%;
          align-self: stretch;
        `;
      case BannerLayout.Half:
        return css`
          width: 50%;
          align-self: stretch;
        `;
      default:
        return css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `;
    }
  }};
  @media (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    width: 100%;
    ${({ layout, imageHeight }) => {
      const currentHeight = 0.3 * window.innerHeight;
      switch (layout) {
        case BannerLayout.Full:
          return css`
            height: ${imageHeight ? imageHeight.replace('px', '').concat('px') : '100%'};
          `;
        default:
          return css`
            height: ${imageHeight && parseInt(imageHeight, 10) > currentHeight
              ? imageHeight.replace('px', '').concat('px')
              : '30vh'};
          `;
      }
    }};
  }
`;

export const StyledBannerContent = styled.div<{
  layout: BannerLayout;
}>`
  padding: ${({ theme }) => theme.sizes.l.value};
  box-sizing: border-box;

  ${({ layout }) => {
    switch (layout) {
      case BannerLayout.Third:
        return css`
          width: 67%;
        `;
      case BannerLayout.Half:
        return css`
          width: 50%;
        `;
      default:
        return css`
          z-index: 1;
          width: 100%;
        `;
    }
  }};

  > * {
    margin-bottom: ${({ theme }) => theme.sizes.s.value};
  }
  @media (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    width: 100%;
    padding: ${({ theme }) => theme.sizes.s.value};
  }
`;

export const StyledButtonsWrapper = styled.div`
  margin-top: ${({ theme }) => theme.sizes.m.value};
  margin-bottom: 0;
  gap: ${({ theme }) => theme.sizes['2xs'].value};
  display: flex;
  @media (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
