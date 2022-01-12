import styled, { css } from 'styled-components';
import { AlertBackgroundColor, AlertHeightSizeTypes, AlertType } from './Alert.types';

export const StyledWrapper = styled.div<{
  type?: AlertType;
}>`
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;

export const StyledAlertInLineWrapper = styled(StyledWrapper)`
  margin-top: 8px;
`;

export const StyledAlertBannerWrapper = styled(StyledWrapper)`
  margin-top: 0;
`;

export const StyledAlertToastWrapper = styled(StyledWrapper)`
  margin-top: 8px;

  ${({ theme }) => css`
    margin-top: ;
    @media screen and (min-width: ${theme.variables.global.breakpoints.medium.value}px) {
    margin-top: 16px
  `}
`;

export const StyledContainer = styled.div<{
  color?: AlertBackgroundColor;
  heightSize?: AlertHeightSizeTypes;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: break-all;
  padding: 8px 16px;
  box-sizing: border-box;
  row-gap: 4px;
  word-break: break-all;

  svg {
    flex-shrink: 0;
  }
`;

export const StyledAlertInLine = styled(StyledContainer)`
  background-color: ${({ color, theme }) => {
    if (color === AlertBackgroundColor.Alert) {
      return theme.color.system.alertBackground.value;
    }
    if (color === AlertBackgroundColor.Success) {
      return theme.color.system.successBackground.value;
    }
    if (color === AlertBackgroundColor.Fail) {
      return theme.color.system.failBackground.value;
    }
    return theme.color.system.notificationBackground.value;
  }};
  color: ${({ theme }) => theme.color.default.value};
  height: ${({ heightSize, theme }) => {
    if (heightSize === AlertHeightSizeTypes.Small) {
      return `${theme.variables.container.size.small.value}px`;
    }
    return `${theme.variables.container.size.medium.value}px`;
  }};
  p {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
`;

export const StyledAlertInLineWithActions = styled(StyledAlertInLine)`
  height: auto;
`;

export const StyledAlert = styled(StyledContainer)`
  flex-direction: row;
  background-color: ${({ color, theme }) => {
    if (color === AlertBackgroundColor.Alert) {
      return theme.color.system.alertStrong.value;
    }
    if (color === AlertBackgroundColor.Success) {
      return theme.color.system.successStrong.value;
    }
    if (color === AlertBackgroundColor.Fail) {
      return theme.color.system.failStrong.value;
    }
    return theme.color.system.notificationStrong.value;
  }};
  color: ${({ theme }) => theme.color.white.value};

  p {
    white-space: nowrap;
  }
`;

export const StyledTextContainer = styled.div`
  min-width: 30px;
  overflow: hidden;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const StyledActionContainer = styled.div`
  display: flex;
  column-gap: 8px;
  justify-content: flex-end;
  box-sizing: border-box;
`;

export const StyledActionItem = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
`;

export const StyledButton = styled.button`
  font-family: inherit;
  display: flex;
  cursor: pointer;
  text-align: left;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  outline: none;
  text-decoration: underline;
`;

export const StyledDismissContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-left: auto;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const StyledAlertContent = styled(StyledContent)`
  width: 80%;
  margin: 0 auto;
  justify-content: center;
`;
