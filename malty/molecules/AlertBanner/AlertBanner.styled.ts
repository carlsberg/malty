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
  padding: 12px;
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  :not(:last-child) {
    padding-bottom: 12px;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    padding-right: 12px;
  }
  div {
    padding-right: 16px;
  }
`;

export const StyledMessage = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const StyledAction = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  margin-left: auto;
  button {
    text-decoration: underline;
  }
`;

export const CloseButtonContainer = styled.div`
  cursor: Pointer;
  display: flex;
`;
