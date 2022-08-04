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

const closeAnimation = keyframes`
 0% {
    opacity: 0;
   visibility: hidden;
   height: 40px;
 }
 100% {
    opacity: 1;
   visibility:visible;
   height: -40px;
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
    return theme.colors.colours.system['notification-strong'].value;
  }};
  color: ${({ theme }) => theme.colors.colours.default.white.value};
`;

export const FadeWrapper = styled.div<{
  show: boolean;
  offsetY: number;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  opacity: 1;
  height: ${({ offsetY }) => (offsetY < 20 ? `calc(40px - ${offsetY}px)` : `40px`)};
  animation: ${closeAnimation} 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
  ${(props) => {
    if (props.show && props.offsetY > 15) {
      return css`
        transition: height 0.35s ease-in-out;
        animation: ${simpleFadeAnimation} 0.2s ease-in-out;
        visibility: hidden;
        height: 0px;
      `;
    }
  }}
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
  breakpoint: number;
}>`
  display: flex;
  align-items: center;
  @media (min-width: ${({ breakpoint }) => breakpoint}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    max-width: calc(100% - 300px);
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

export const StyledMessage = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const StyledAction = styled.div<{
  breakpoint: number;
}>`
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  margin-left: auto;
  button {
    text-decoration: underline;
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}px) {
    margin-right: ${({ theme }) => theme.sizes.s.value};
  }
`;

export const CloseButtonContainer = styled.div<{ fade: boolean }>`
  cursor: Pointer;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.sizes['2xs'].value};
  display: flex;
  align-items: center;
  ${(props) =>
    props?.fade &&
    css`
      animation: ${simpleFadeAnimation} 0.2s ease-in-out;
      transition-delay: visibility 0.2s;
      visibility: hidden;
    `}
`;
