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

// export const StyledTooltipPositionTopCenter = styled(StyledTooltip)`
//   bottom: calc(100% + ${({ theme }) => theme.sizes['2xs'].value});
//   left: 50%;
//   transform: translate(-50%, 0);
//   margin: ${({ anchorOffset }) => `0 0 ${anchorOffset.vertical}px -${anchorOffset.horizontal / 2}px`};

//   &::before {
//     left: 50%;
//     right: auto;
//     transform: translateX(-50%);
//     bottom: -${({ theme }) => theme.sizes['3xs'].value};
//     border-width: ${({ theme }) => theme.sizes['3xs'].value} ${({ theme }) => theme.sizes['3xs'].value} 0
//       ${({ theme }) => theme.sizes['3xs'].value};
//     border-top-color: ${({ theme, isDark }) =>
//       isDark ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[20].value};
//   }
// `;

// export const StyledTooltipPositionTopLeft = styled(StyledTooltipPositionTopCenter)`
//   margin: ${({ anchorOffset }) => `0 0 ${anchorOffset.vertical}px -${anchorOffset.horizontal / 1.5}px`};
//   &::before {
//     left: ${({ theme }) => theme.sizes['2xs'].value};
//     right: auto;
//     transform: none;
//   }
// `;

// export const StyledTooltipPositionTopRight = styled(StyledTooltipPositionTopCenter)`
//   margin: ${({ anchorOffset }) => `0 0 ${anchorOffset.vertical}px -${anchorOffset.horizontal / 3}px`};
//   &::before {
//     left: auto;
//     right: ${({ theme }) => theme.sizes['2xs'].value};
//   }
// `;

// export const StyledTooltipPositionBottomCenter = styled(StyledTooltip)`
//   top: calc(100% + ${({ theme }) => theme.sizes.s.value});
//   left: 50%;
//   transform: translate(-50%, 0);
//   margin: ${({ anchorOffset }) => `0 0 0 -${anchorOffset.horizontal / 2}px`};

//   &::before {
//     top: -${({ theme }) => theme.sizes['3xs'].value};
//     left: 50%;
//     right: auto;
//     transform: translateX(-50%);
//     border-width: 0 ${({ theme }) => theme.sizes['3xs'].value} ${({ theme }) => theme.sizes['3xs'].value}
//       ${({ theme }) => theme.sizes['3xs'].value};
//     border-bottom-color: ${({ theme, isDark }) =>
//       isDark ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[20].value};
//   }
// `;

// export const StyledTooltipPositionBottomLeft = styled(StyledTooltipPositionBottomCenter)`
//   margin: ${({ anchorOffset }) => `0 0 0 -${anchorOffset.horizontal / 1.5}px`};
//   &::before {
//     left: ${({ theme }) => theme.sizes['2xs'].value};
//     right: auto;
//     transform: none;
//   }
// `;

// export const StyledTooltipPositionBottomRight = styled(StyledTooltipPositionBottomCenter)`
//   margin: ${({ anchorOffset }) => `0 0 0 -${anchorOffset.horizontal / 3}px`};
//   &::before {
//     left: auto;
//     right: ${({ theme }) => theme.sizes['2xs'].value};
//   }
// `;

// export const StyledTooltipPositionRight = styled(StyledTooltip)`
//   top: 50%;
//   left: calc(100% + ${({ theme }) => theme.sizes.s.value});
//   right: auto;
//   transform: translate(0, -50%);
//   margin: ${({ anchorOffset }) => `-${anchorOffset.vertical / 2}px 0 0 0`};

//   &::before {
//     top: 50%;
//     left: -${({ theme }) => theme.sizes['3xs'].value};
//     transform: translateY(-50%);
//     border-width: ${({ theme }) => theme.sizes['3xs'].value} ${({ theme }) => theme.sizes['3xs'].value}
//       ${({ theme }) => theme.sizes['3xs'].value} 0;
//     border-right-color: ${({ theme, isDark }) =>
//       isDark ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[20].value};
//   }
// `;

// export const StyledTooltipPositionLeft = styled(StyledTooltip)`
//   top: 50%;
//   left: auto;
//   right: calc(100% + ${({ theme }) => theme.sizes.s.value});
//   transform: translate(0, -50%);
//   margin: ${({ anchorOffset }) => `-${anchorOffset.vertical / 2}px ${anchorOffset.horizontal}px 0 0`};

//   &::before {
//     top: 50%;
//     right: -${({ theme }) => theme.sizes['3xs'].value};
//     transform: translateY(-50%);
//     border-width: ${({ theme }) => theme.sizes['3xs'].value} 0 ${({ theme }) => theme.sizes['3xs'].value}
//       ${({ theme }) => theme.sizes['3xs'].value};
//     border-left-color: ${({ theme, isDark }) =>
//       isDark ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[20].value};
//   }
// `;
