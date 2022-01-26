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
  width: 480px;
  display: block;
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 60px 60px 48px;
  position: relative;
`;

export const StyledCloseIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
`;

export const StyledIconContainer = styled.div`
  margin: 0 0 18px;
  > svg {
    height: 35px;
    width: 35px;
  }
`;

export const StyledTitleContainer = styled.div`
  display: inline-flex;
  > span p {
    font-size: 18px;
    margin: 0 0 16px;
  }
`;

export const StyledTextContainer = styled.div`
  width: 416px;
  display: inline-flex;
  > span p {
    margin: 0 0 24px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledButtonContainer = styled.div`
  width: 200px;
  padding: 0px 8px;
  span > button {
    height: 48px;
  }
`;
