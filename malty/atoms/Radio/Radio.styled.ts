import styled from 'styled-components';

export const StyledRadio = styled.input`
  display: inline-block;
  height: 18px;
  width: 18px;
  margin-top: 0;
  background: red;
  border: 2px solid red;

  position: relative;

  cursor: pointer;

  &:before {
    content: '';
    transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(0, 0);
    left: 5px;
    z-index: 1;

    width: 8px;
    height: 8px;

    background: #000000;

    border-radius: 50%;
  }

  &:checked {
    &:before {
      transform: translateY(-50%) scale(1, 1);
    }
  }

  &:after {
    content: '';

    position: absolute;

    width: 18px;
    height: 18px;
    box-sizing: border-box;
    background: white;

    border: 2px solid rgba(33, 40, 51, 1);
    border-radius: 50%;
  }
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.default.value};
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  line-height: ${({ theme }) => theme.typography.text['medium-small']['line-height'].value}px;
  padding-left: ${({ theme }) => theme.variables.radio.paddingLeft.value}px;
  font-weight: 400;
`;

export const StyledError = styled.label`
  font-family: inherit;
  color: ${({ theme }) => theme.color.system.failStrong.value};
  font-size: ${({ theme }) => theme.typography.information.tiny['font-size'].value}px;
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.information.tiny['line-height'].value}px;
  letter-spacing: 0;
`;
export const StyledRadioContainer = styled.div`
  display: flex;
  align-items: center;
`;
