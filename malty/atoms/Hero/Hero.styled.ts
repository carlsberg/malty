import styled, { css } from 'styled-components';
import { HeroLayout } from './Hero.types';

export const StyledHeroContainer = styled.div<{
  negative: boolean;
  reverse: boolean;
  layout: HeroLayout;
}>`
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
        color: ${theme.colors.colours.default.white.value};
      `;
    }
    return css`
      background-color: ${theme.colors.colours.support['20'].value};
      color: ${theme.colors.colours.default['digital-black'].value};
    `;
  }};

  @media (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  }
`;

export const StyledHeroImage = styled.div<{
  layout: HeroLayout;
  imageSrc: string;
}>`
  height: 100%;
  background-image: ${({ imageSrc }) => `${imageSrc ? `url(${imageSrc})` : 'unset'}`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ layout }) => {
    switch (layout) {
      case HeroLayout.Third:
        return css`
          width: 33%;
        `;
      case HeroLayout.Half:
        return css`
          width: 50%;
        `;
      default:
        return css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        `;
    }
  }};
  @media (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    width: 100%;
    ${({ layout }) => {
      switch (layout) {
        case HeroLayout.Full:
          return css`
            max-height: 100vh;
          `;
        default:
          return css`
            height: 30vh;
          `;
      }
    }};
  }
`;

export const StyledHeroContent = styled.div<{
  layout: HeroLayout;
}>`
  padding: ${({ theme }) => theme.sizes.l.value};
  box-sizing: border-box;

  ${({ layout }) => {
    switch (layout) {
      case HeroLayout.Third:
        return css`
          width: 67%;
        `;
      case HeroLayout.Half:
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
  @media (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    width: 100%;
  }
`;

export const StyledButtonsWrapper = styled.div`
  margin: ${({ theme }) => theme.sizes.l.value} 0;
  display: flex;
  @media (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    flex-direction: column;
    margin: 0 ${({ theme }) => theme.sizes.l.value};
  }
`;
export const StyledButtonContainer = styled.div`
  max-width: 264px;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    flex-direction: column;
    max-width: 100%;
  }
  :first-of-type {
    padding-right: ${({ theme }) => theme.sizes['2xs'].value};
    @media (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
      padding-right: 0px;
    }
  }
  :last-of-type {
    padding-left: ${({ theme }) => theme.sizes['2xs'].value};
    @media (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
      padding-left: 0px;
      margin-top: ${({ theme }) => theme.sizes.s.value};
    }
  }
`;
