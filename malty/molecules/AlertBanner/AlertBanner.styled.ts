import { TextColor } from '@carlsberg/malty.atoms.text';
import styled, { css, keyframes } from 'styled-components';
import { AlertBannerType } from './AlertBanner.types';

const simpleFadeAnimation = keyframes`
     0% {
       visibility: visible;
       opacity: 1;
     } 
     100% {
       visibility: visible;
        opacity: 0;
     }
`;

export const Container = styled.div<{
  type?: AlertBannerType;
}>`
  background-color: ${({ type, theme }) => {
    if (type === AlertBannerType.Information) {
      return theme.colors.colours.system['notification-strong'].value;
    }
    if (type === AlertBannerType.Error) {
      return theme.colors.colours.system.fail.value;
    }
    if (type === AlertBannerType.Warning) {
      return theme.colors.colours.system['alert-strong'].value;
    }
    if (type === AlertBannerType.Success) {
      return theme.colors.colours.system.success.value;
    }
    return theme.colors.colours.system['notification-strong'].value;
  }};
`;

export const FadeWrapper = styled.div<{
  show: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  opacity: 1;
  height: ${({ theme }) => theme.sizes.xl.value};
  transition: height 0.2s ease-in-out;
  & > div {
    width: 100%;
  }
  ${({ show }) =>
    show &&
    css`
      transition: height 0.35s ease-in-out;
      animation: ${simpleFadeAnimation} 0.3s ease-in-out;
      visibility: hidden;
      height: 0px;
    `}
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  min-height: ${({ theme }) => theme.sizes.xl.value};
  padding-left: ${({ theme }) => theme.sizes['2xs'].value};
`;

export const MessageContainer = styled.div<{
  breakpoint: string;
  applyMarginBottom: boolean;
}>`
  padding-top: ${({ theme }) => theme.sizes['2xs'].value};
  padding-bottom: ${({ theme, applyMarginBottom }) => applyMarginBottom && theme.sizes['2xs'].value};
  display: flex;
  align-items: center;
  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    max-width: calc(100% - 300px);
    padding: ${({ theme }) => theme.sizes['2xs'].value} 0px;
  }
  svg {
    min-height: ${({ theme }) => theme.sizes.m.value};
    min-width: ${({ theme }) => theme.sizes.m.value};
    padding-right: ${({ theme }) => theme.sizes.xs.value};
  }
  div:not(:last-child) {
    padding-right: ${({ theme }) => theme.sizes.s.value};
  }
`;

export const StyledMessage = styled.div<{
  hideText: boolean;
  isMobile?: boolean;
  color: TextColor;
}>`
  overflow: hidden;
  display: flex;
  align-items: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  transition: all 0.2s linear, color 0;
  color: ${({ color, theme }) => theme.colors['text-colours'][color].value};
  ${({ hideText, isMobile }) => {
    if (hideText && isMobile) {
      return css`
        -webkit-line-clamp: 1;
        line-clamp: 1;
      `;
    }
    if (!hideText && isMobile) {
      return css`
        -webkit-line-clamp: 3;
        line-clamp: 3;
      `;
    }
    return css`
      -webkit-line-clamp: 2;
      line-clamp: 2;
    `;
  }}
`;

export const FadeText = styled.div<{ fire: boolean; currentElementHeight?: number }>`
  height: 18px;
  transition: all 0.2s linear;
  ${({ fire, currentElementHeight }) => {
    if (!fire && currentElementHeight && currentElementHeight > 18) {
      return css`
        height: ${currentElementHeight}px;
      `;
    }
    return null;
  }}
`;

export const StyledAction = styled.div<{
  breakpoint: string;
}>`
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  margin-left: auto;
  button {
    text-decoration: underline;
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    margin-right: ${({ theme }) => theme.sizes.s.value};
  }
`;

export const CloseButtonContainer = styled.div<{ triggerFadeAnimation: boolean }>`
  cursor: Pointer;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.sizes['2xs'].value};
  display: flex;
  align-items: center;
  ${({ triggerFadeAnimation }) =>
    triggerFadeAnimation &&
    css`
      animation: ${simpleFadeAnimation} 0.2s ease-in-out;
      transition-delay: visibility 0.2s;
      visibility: hidden;
    `}
`;
