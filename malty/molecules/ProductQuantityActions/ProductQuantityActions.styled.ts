import styled from 'styled-components';

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes['2xs'].value};
`;

export const StyledInputWrapper = styled.div`
  flex: 1;
`;

export const StyledButtonWrapper = styled.div<{ hasIcon?: boolean; hasActionQuantityInput?: boolean }>`
  ${({ hasIcon }) => !hasIcon && 'flex: 1;'}
  ${({ hasActionQuantityInput }) => !hasActionQuantityInput && 'width: 100%;'}
`;
