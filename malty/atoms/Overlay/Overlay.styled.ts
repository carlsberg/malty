import styled from 'styled-components';

export const StyledOverlay = styled.div<{ isWhite: boolean }>`
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.colours.overlay.white[50].value : theme.colors.colours.overlay['digital-black'][50].value};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
