import styled, { keyframes } from 'styled-components';

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

export const StyledLoadingContainer = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes['3xs'].value};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes['3xs'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  color: ${({ theme }) => theme.colors.colours.information.close.value};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['line-height'].value};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
`;

export const StyledLoading = styled.div<{
  size: string;
}>`
  display: flex;
  svg {
    &.fade-in {
      animation: ${fadeIn} 1s;
    }
    &.spinning {
      animation: ${rotate} 2s linear infinite;
    }
    height: ${({ size }) => size};
    width: ${({ size }) => size};
  }
`;
