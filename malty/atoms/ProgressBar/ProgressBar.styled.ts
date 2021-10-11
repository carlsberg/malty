import styled from 'styled-components';

export const StyledProgressBar = styled.div<{
  progress: number;
}>`
  position: relative;
  height: ${({ theme }) => theme.variables.progressBar.bar.height.value}px;
  background-color: ${({ theme }) => theme.color.overlay.opacity10.default.value};
  width: 100%;
  border-radius: ${({ theme }) => theme.variables.progressBar.bar.borderRadius.value}px;
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.color.default.value};
    transition: width 0.25s ease-in-out;
    width: ${({ progress }) => `${progress}%`};
    max-width: 100%;
  }
`;

export const StyledWrapper = styled.div`
  font-family: ${({ theme }) => theme.typography.global['font-family'].value};
  display: flex;
  flex-direction: column;
`;
export const StyledBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledProgressAmount = styled.span`
  margin-left: ${({ theme }) => theme.variables.progressBar.text.marginLeft.value}px;
  font-size: ${({ theme }) => theme.typography.text.small['font-size'].value}px;
  line-height: ${({ theme }) => theme.variables.progressBar.text.lineHeight.value};
  font-weight: bold;
  flex: 0 1 auto;
`;

export const StyledText = styled.span`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  line-height: ${({ theme }) => theme.variables.progressBar.text.lineHeight.value};
  margin-top: ${({ theme }) => theme.variables.progressBar.text.marginTop.value}px;
  color: ${({ theme }) => theme.color.form.calendarSpecial.value};
`;
