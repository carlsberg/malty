import styled from 'styled-components';
import { AlertBannerType } from './AlertBanner.types';

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

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 40px;
  padding-left: ${({ theme }) => theme.sizes['2xs'].value};
`;

export const MessageContainer = styled.div<{
  isMobile: boolean;
}>`
  display: flex;
  align-items: center;

  position: ${({ isMobile }) => (isMobile ? null : `absolute`)};
  top: ${({ isMobile }) => (isMobile ? null : `50%`)};
  left: ${({ isMobile }) => (isMobile ? null : `50%`)};
  transform: ${({ isMobile }) => (isMobile ? null : `translate(-50%, -50%)`)};
  svg {
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
  isMobile: boolean;
}>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  margin-left: auto;
  button {
    text-decoration: underline;
  }
  margin-right: ${({ theme, isMobile }) => (isMobile ? theme.sizes.s.value : 0)};
`;

export const CloseButtonContainer = styled.div`
  cursor: Pointer;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.sizes['2xs'].value};
  display: flex;
  align-items: center;
`;
