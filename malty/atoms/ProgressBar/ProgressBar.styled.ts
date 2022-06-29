import styled from 'styled-components';

export const StyledProgressBar = styled.div<{
  progress: number;
}>`
  position: relative;
  height: ${({ theme }) => theme.sizes['2xs'].value};
  background-color: ${({ theme }) => theme.colors.colours.overlay['digital-black'][10].value};
  width: 100%;
  border-radius: ${({ theme }) => theme.sizes['4xs'].value};
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.theme.themePrimary.value};
    transition: width 0.25s ease-in-out;
    width: ${({ progress }) => `${progress}%`};
    max-width: 100%;
  }
`;

export const StyledWrapper = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
`;
export const StyledBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledProgressAmount = styled.span`
  margin-left: ${({ theme }) => theme.sizes['2xs'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.small_bold['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text.small_bold['line-height'].value};
  font-weight: ${({ theme }) => theme.typography.desktop.text.small_bold['font-weight'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text.small_bold['font-family'].value};
  flex: 0 1 auto;
  min-width: ${({ theme }) => theme.sizes.l.value};
`;

export const StyledText = styled.span`
  width: 100%;
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.desktop.text.tiny_bold['font-weight'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_bold['font-size'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text.tiny_bold['font-family'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text.tiny_bold['line-height'].value};
  margin-top: ${({ theme }) => theme.sizes.xs.value};
  color: ${({ theme }) => theme.colors.colours.support[60].value};
`;
