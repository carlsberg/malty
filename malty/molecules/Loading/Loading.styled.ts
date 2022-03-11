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
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes['3xs'].value};
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.sizes['3xs'].value};
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.colours.support[60].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.small_bold['font-size'].value};
  font-weight: ${({ theme }) => theme.typography.desktop.text.small_bold['font-weight'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text.small_bold['line-height'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text.small_bold['font-family'].value};
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
