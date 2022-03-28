import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const resolveSize = (size: string) => {
  let resolvedSize;
  switch (size) {
    case 'Large':
      resolvedSize = '860px';
      break;
    case 'XLarge':
      resolvedSize = '1024px';
      break;
    default:
      // Medium Modal
      resolvedSize = '640px';
      break;
  }
  return resolvedSize;
};

export const StyledModalWrapper = styled.div<{
  size: string;
}>`
  width: 100%;
  max-width: ${({ size }) => resolveSize(size)};
  display: block;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  text-align: center;
  padding: ${({ theme }) => theme.sizes.m.value} 0 ${({ theme }) => theme.sizes.l.value};
  position: relative;
  max-height: 80vh;
  @media (max-width: 768px) {
    max-height: calc(100vh - 16px);
    padding: ${({ theme }) => theme.sizes['2xs'].value} 0 ${({ theme }) => theme.sizes.s.value};
    width: calc(100% - 16px);
  }
`;

export const StyledCloseIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: ${({ theme }) => theme.sizes.m.value};
  right: ${({ theme }) => theme.sizes.m.value};
  @media (max-width: 768px) {
    top: ${({ theme }) => theme.sizes['2xs'].value};
    right: ${({ theme }) => theme.sizes.s.value};
  }
`;

export const StyledTitleContainer = styled.div`
  margin: ${({ theme }) => theme.sizes['2xs'].value} ${({ theme }) => theme.sizes['2xl'].value}
    ${({ theme }) => theme.sizes.xs.value};
  display: inherit;
  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.sizes['2xs'].value} ${({ theme }) => theme.sizes.s.value};
  }
`;

export const StyledContentContainer = styled.div`
  margin: ${({ theme }) => theme.sizes.xs.value} ${({ theme }) => theme.sizes['2xl'].value} 0;
  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.sizes['2xs'].value} ${({ theme }) => theme.sizes.s.value} 0;
  }
`;

export const StyledButtonsWrapper = styled.div`
  margin: ${({ theme }) => theme.sizes['2xl'].value} ${({ theme }) => theme.sizes['2xl'].value} 0;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: ${({ theme }) => theme.sizes.l.value} ${({ theme }) => theme.sizes.s.value} 0;
  }
`;
export const StyledButtonContainer = styled.div`
  max-width: 264px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
  :first-of-type {
    padding-right: ${({ theme }) => theme.sizes['2xs'].value};
    @media (max-width: 768px) {
      padding-right: 0px;
    }
  }
  :last-of-type {
    padding-left: ${({ theme }) => theme.sizes['2xs'].value};
    @media (max-width: 768px) {
      padding-left: 0px;
      margin-top: 16px;
    }
  }
`;
