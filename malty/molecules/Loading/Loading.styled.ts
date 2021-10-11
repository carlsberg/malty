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
  gap: ${({ theme }) => theme.variables.loading.gap.value}px;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.variables.loading.padding.value}px;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  color: ${({ theme }) => theme.variables.loading.color.value};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${({ theme }) => theme.typography.text['medium-small']['line-height'].value}px;
  color: ${({ theme }) => theme.color.default.value};
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
`;
