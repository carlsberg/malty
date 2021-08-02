import styled, { keyframes } from 'styled-components';
import { Sizes, SizeTypes } from './Loading.types';

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

const sizeRef = (size: SizeTypes) => {
  switch (size) {
    case SizeTypes.Small:
      return `${Sizes.Small}px`;
    case SizeTypes.Large:
      return `${Sizes.Large}px`;
    default:
      return `${Sizes.Medium}px`; /* SizeTypes.Medium -- medium as default */
  }
};

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
  font-family: Monserrat;
  color: #1c2025;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
  color: ${({ theme }) => theme.color.default.value};
  font-family: ${({ theme }) => theme.font.fontFamily.text};
`;

export const StyledLoading = styled.div<{
  size: SizeTypes;
}>`
  display: flex;
  svg {
    &.fade-in {
      animation: ${fadeIn} 1s;
    }
    &.spinning {
      animation: ${rotate} 2s linear infinite;
    }
    height: ${({ size }) => sizeRef(size)};
    width: ${({ size }) => sizeRef(size)};
`;
