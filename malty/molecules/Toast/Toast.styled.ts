import styled, { keyframes } from 'styled-components';
import { ToastColor } from './Toast.types';

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
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
  bottom: ${({ theme }) => theme.sizes.l.value};
  animation-name: ${fadeInBottomUpAnimation};
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
`;

export const StyledContainer = styled.div<{
  color: ToastColor;
}>`
  svg {
    flex-shrink: 0;
  }
`;

export const StyledToast = styled(StyledContainer)`
  padding: ${({ theme }) => theme.sizes.xs.value} ${({ theme }) => theme.sizes.s.value};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.sizes.xl.value};
  width: 100%;
  max-width: 736px;
  background-color: ${({ color, theme }) => theme.colors.colours.system[color].value};
  color: ${({ theme }) => theme.colors.colours.default.white.value};
  margin: auto;
  word-break: break-word;
  box-sizing: border-box;
  gap: ${({ theme }) => theme.sizes.s.value};
`;

export const StyledTextContainer = styled.div`
  min-width: 30px;
  overflow: hidden;
`;

export const StyledActionItem = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  button {
    text-decoration: none;
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
  column-gap: ${({ theme }) => theme.sizes.s.value};
  margin-left: auto;
`;

export const StyledAlertToastContent = styled.div`
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  p {
    white-space: normal;
  }
`;
