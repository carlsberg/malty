import { StyledIcon } from '@carlsberg/malty.atoms.icon';
import styled, { keyframes } from 'styled-components';
import {SizeTypes} from './Loading.types';

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const StyledLoadingContainer = styled.div<{
    size: SizeTypes
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: ${({ size }) => size === SizeTypes.Medium ? '14px' : '16px'};
  color: ${({ theme }) => theme.color.default.value};
  font-family: ${({ theme }) => theme.font.fontFamily.text};
`;

export const StyledLoading = styled.div`
  display: flex;
  transition: 0.25s ease-in-out;
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
