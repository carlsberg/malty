import { space } from '@carlsberggroup/malty.utils.space';
import styled, { keyframes } from 'styled-components';
import { LoadingSize, StyledLoadingContainerProps } from './Loading.types';

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: rotate(270deg);
    }
    to {
      opacity: 1;
      transform: rotate(360deg);
    }
`;

export const StyledLoadingContainer = styled.div<StyledLoadingContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, size }) => (size === LoadingSize.Small ? theme.sizes['4xs'].value : theme.sizes['2xs'].value)};
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.sizes['3xs'].value};
  position: relative;
  z-index: ${({ $zIndex }) => $zIndex};
  ${space}
`;

export const StyledLoading = styled.div<{
  size: string;
}>`
  display: flex;

  svg {
    height: ${({ size }) => size};
    width: ${({ size }) => size};
  }
  &.fade-in {
    svg {
      animation: ${fadeIn} 1s;
    }
  }
  &.spinning {
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;
