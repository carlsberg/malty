import styled, { keyframes } from 'styled-components';

// Event
const fadeInAnimation = keyframes`
  0% {
    opacity: 0.3
  }
  100% {
    opacity: 1
  }
`;

export const StyledArrow = styled.div<{
  isDark: boolean;
}>`
  border-style: solid;
  border-color: transparent;
`;

export const StyledTooltipWrapper = styled.div<{
  isDark: boolean;
}>`
  font-family: inherit;
  background-color: ${({ isDark, theme }) =>
    isDark ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[20].value};
  min-width: ${({ theme }) => theme.sizes['4xl'].value};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  animation-name: ${fadeInAnimation};
  animation-duration: 0.5s;

  &[data-popper-placement^='top'] ${StyledArrow} {
    bottom: -${({ theme }) => theme.sizes['3xs'].value};
    border-width: ${({ theme }) => theme.sizes['3xs'].value} ${({ theme }) => theme.sizes['3xs'].value} 0
      ${({ theme }) => theme.sizes['3xs'].value};
    border-top-color: ${({ theme, isDark }) =>
      isDark ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[20].value};
  }

  &[data-popper-placement^='bottom'] ${StyledArrow} {
    top: -${({ theme }) => theme.sizes['3xs'].value};
    border-width: 0 ${({ theme }) => theme.sizes['3xs'].value} ${({ theme }) => theme.sizes['3xs'].value}
      ${({ theme }) => theme.sizes['3xs'].value};
    border-bottom-color: ${({ theme, isDark }) =>
      isDark ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[20].value};
  }

  &[data-popper-placement^='left'] ${StyledArrow} {
    right: -${({ theme }) => theme.sizes['3xs'].value};
    border-width: ${({ theme }) => theme.sizes['3xs'].value} 0 ${({ theme }) => theme.sizes['3xs'].value}
      ${({ theme }) => theme.sizes['3xs'].value};
    border-left-color: ${({ theme, isDark }) =>
      isDark ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[20].value};
  }

  &[data-popper-placement^='right'] ${StyledArrow} {
    left: -${({ theme }) => theme.sizes['3xs'].value};
    border-width: ${({ theme }) => theme.sizes['3xs'].value} ${({ theme }) => theme.sizes['3xs'].value}
      ${({ theme }) => theme.sizes['3xs'].value} 0;
    border-right-color: ${({ theme, isDark }) =>
      isDark ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[20].value};
  }
`;

export const StyledTooltip = styled.div`
  padding: ${({ theme }) => `${theme.sizes['4xs'].value} ${theme.sizes['2xs'].value}`};
`;
