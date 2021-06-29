import styled from 'styled-components';
import { theme } from '../../theme';

export const StyledProgressBar = styled.div<{
  progress: number;
}>`
  position: relative;
  height: 8px;
  background-color: rgba(33, 40, 51, 0.1);
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${theme.colors.primary};
    transition: width 0.25s ease-in-out;
    width: ${({ progress }) => `${progress}%`};
    max-width: 100%;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledProgressAmount = styled.span`
  margin-left: 16px;
  font-size: 12px;
  line-height: 12px;
  font-weight: bold;
  flex: 0 1 auto;
`;

export const StyledText = styled.span`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  margin-top: 10px;
  color: ${theme.colors.supportDark};
`;
