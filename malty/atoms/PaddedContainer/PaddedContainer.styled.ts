import styled from 'styled-components';

export const StyledPaddedContainer = styled.div<{ padding: string }>`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  border: 0;
  padding: ${({ padding }) => padding};
`;
