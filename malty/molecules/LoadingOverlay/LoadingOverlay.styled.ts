import styled from 'styled-components';

export const StyledLoadingOverlay = styled.div<{ $zIndex: number }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: ${({ $zIndex }) => $zIndex};
`;
