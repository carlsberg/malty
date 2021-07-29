import styled, { keyframes } from 'styled-components';
import { SizeTypes } from './Loading.types';

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const StyledLoadingContainer = styled.div<{
  size: SizeTypes;
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.default.value};
  font-family: ${({ theme }) => theme.font.fontFamily.text};
`;

export const StyledLoading = styled.div<{
  size: SizeTypes
}>`
  display: flex;
  transition: 0.25s ease-in-out;
  svg {
    animation: ${rotate} 2s linear infinite;
    height: ${({ size }) => {
      switch (size) {
        case SizeTypes.Small: return '16px';
        case SizeTypes.Large: return '24px';
        default: return '18px'; /* SizeTypes.Medium -- medium as default */
    }}
  }
`;
