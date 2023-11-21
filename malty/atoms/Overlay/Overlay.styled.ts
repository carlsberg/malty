import styled from 'styled-components';

export const StyledOverlay = styled.div<{
  isWhite: boolean;
  zIndex: number;
  $fixed: boolean;
}>`
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.colours.overlay.white[75].value : theme.colors.colours.overlay['digital-black'][50].value};
  position: ${({ $fixed }) => ($fixed ? 'fixed' : 'absolute')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ zIndex }) => zIndex};
  display: flex;
  align-items: center;
  justify-content: center;
`;
