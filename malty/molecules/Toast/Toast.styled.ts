import styled, { keyframes } from 'styled-components';
import { ToastColor } from './Toast.types';

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
export const StyledAlertToastWrapper = styled.div`
  width: 100%;
  position: absolute;
  margin: auto;
  left: 0;
  bottom: ${({ theme }) => theme.sizes.l.value};
  animation-name: ${fadeInBottomUpAnimation};
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
`;

export const StyledToast = styled.div<{
  color: ToastColor;
}>`
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

export const StyledActionItem = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  button {
    text-decoration: none;
  }
`;

export const StyledDismissContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.sizes.s.value};
  margin-left: auto;
`;
