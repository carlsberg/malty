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

export const StyledModalWrapper = styled.div`
  width: ${({ theme }) => theme.variables.modal.width.value}px;
  display: block;
  background-color: ${({ theme }) => theme.color.white.value};
  text-align: center;
  padding: ${({ theme }) => theme.variables.modal.padding.value}px;
  position: relative;
`;

export const StyledCloseIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: ${({ theme }) => theme.variables.modal.closeIcon.top.value}px;
  right: ${({ theme }) => theme.variables.modal.closeIcon.right.value}px;
`;

export const StyledIconContainer = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.variables.modal.mainIcon.marginTop.value}px;
`;

export const StyledTitleContainer = styled.div`
  margin-top: ${({ theme }) => theme.variables.modal.title.marginTop.value}px;
  p {
    margin: 0px;
  }
`;

export const StyledTextContainer = styled.div`
  margin-top: ${({ theme }) => theme.variables.modal.text.marginTop.value}px;
  p {
    margin: 0px;
  }
`;

export const StyledImgContainer = styled.div`
  margin-top: ${({ theme }) => theme.variables.modal.image.marginTop.value}px;
`;

export const StyledButtonsWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: ${({ theme }) => theme.variables.modal.buttons.marginTop.value}px;
`;

export const StyledButtonContainer = styled.div`
  width: ${({ theme }) => theme.variables.modal.buttons.width.value}px;
  padding: ${({ theme }) => theme.variables.modal.buttons.padding.value}px;
`;
