import { space, SpaceProps } from '@carlsberggbs/malty.utils.space';
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
export const StyledAlertToastWrapper = styled.div<SpaceProps>`
  width: 100%;
  position: absolute;
  margin: auto;
  left: 0;
  bottom: ${({ theme }) => theme.sizes.l.value};
  animation-name: ${fadeInBottomUpAnimation};
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;

  ${space}
`;

export const StyledToast = styled.div<{
  color: ToastColor;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${({ theme }) => theme.sizes.xl.value};
  height: auto;
  width: 100%;
  max-width: 736px;
  background-color: ${({ color, theme }) => theme.colors.colours.system[color].value};
  color: ${({ theme }) => theme.colors.colours.default.white.value};
  margin: auto;
  word-break: break-word;
  box-sizing: border-box;
  gap: ${({ theme }) => theme.sizes.s.value};
  p {
    padding: ${({ theme }) => theme.sizes.xs.value} 0 ${({ theme }) => theme.sizes.xs.value}
      ${({ theme }) => theme.sizes.s.value};
    line-height: ${({ theme }) => theme.sizes.s.value};
  }
`;

export const StyledActionItem = styled.div`
  white-space: nowrap;
`;

export const StyledDismissContainer = styled.div``;
