import styled, { keyframes } from 'styled-components';
import { AlertColor, AlertSize, AlertType } from './Alert.types';

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

// Toast
const fadeInBottomUpAnimation = keyframes`
  0% {
    bottom: 0;
    opacity: 0.3
  }
  100% {
    bottom: 32px;
    opacity: 1
  }
`;
export const StyledAlertToastWrapper = styled(StyledWrapper)`
  position: absolute;
  margin: auto;
  left: 0;
  bottom: 32px;
  animation-name: ${fadeInBottomUpAnimation};
  animation-duration: 0.5s;
`;

export const StyledContainer = styled.div<{
  color?: AlertColor;
  heightSize?: AlertSize;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    if (color === AlertColor.Alert) {
      return theme.colors.colours.system['alert-light'].value;
    }
    if (color === AlertColor.Success) {
      return theme.colors.colours.system['success-light'].value;
    }
    if (color === AlertColor.Fail) {
      return theme.colors.colours.system['fail-light'].value;
    }
    return theme.colors.colours.system['notification-light'].value;
  }};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  height: ${({ heightSize, theme }) => {
    if (heightSize === AlertSize.Small) {
      return `${theme.sizes.l.value}`;
    }
    return `${theme.sizes.xl.value}`;
  }};
`;

export const StyledAlertInLineWithActions = styled(StyledAlertInLine)`
  height: auto;
`;

export const StyledAlert = styled(StyledContainer)`
  flex-direction: row;
  background-color: ${({ color, theme }) => {
    if (color === AlertColor.Alert) {
      return theme.colors.colours.system['alert-strong'].value;
    }
    if (color === AlertColor.Success) {
      return theme.colors.colours.system.success.value;
    }
    if (color === AlertColor.Fail) {
      return theme.colors.colours.system.fail.value;
    }
    return theme.colors.colours.system['notification-strong'].value;
  }};
  color: ${({ theme }) => theme.colors.colours.default.white.value};
`;

export const StyledToast = styled(StyledAlert)`
  width: min(736px, 90vw);
  margin: auto;
`;

export const StyledTextContainer = styled.div`
  min-width: 30px;
  overflow: hidden;
`;

export const StyledActionContainer = styled.div`
  display: flex;
  column-gap: 8px;
  justify-content: flex-end;
  box-sizing: border-box;
  height: 100%;
  align-items: center;
`;

export const StyledActionItem = styled.div.attrs((props: { alertType: AlertType }) => props)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  button {
    text-decoration: ${(props) => (props.alertType === AlertType.Toast ? `none` : `underline`)};
  }
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
export const StyledAlertToastContent = styled(StyledAlertContent)`
  width: 100%;
  justify-content: space-between;

  p {
    white-space: normal;
  }
`;
