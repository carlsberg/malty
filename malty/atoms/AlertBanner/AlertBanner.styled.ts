import styled from 'styled-components';
import { AlertBannerType } from './AlertBanner.types';

export const StyledAction = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  button {
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const CloseButtonContainer = styled.div`
  cursor: Pointer;
  display: flex;
`;

export const StyledMessage = styled.div`
  padding-left: 12px;
  padding-right: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  svg {
    padding: 0 8px;
  }
`;

export const MessageMobileContainer = styled.div`
  display: flex;
  align-items: center;
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
  padding: 12px;
`;

// DESKTOP
export const DesktopContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// MOBILE
export const MobileContent = styled.div<{
  justifyContent?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  :not(:last-child) {
    padding-bottom: 12px;
  }
`;
