import styled from 'styled-components';

export const StyledOverlay = styled.div<{ isWhite: boolean }>`
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.color.overlay.opacity50.white.value : theme.color.overlay.opacity50.default.value};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
