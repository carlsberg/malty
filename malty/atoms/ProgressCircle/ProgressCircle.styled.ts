import styled from 'styled-components';
import { ForegroundCircleColor, PercentagePosition } from './ProgressCircle.types';

export const StyledWrapper = styled.div<{
  percentagePosition: PercentagePosition;
}>`
  min-width: ${({ theme }) => theme.sizes['4xl'].value};
  display: flex;
  flex-direction: ${({ percentagePosition }) =>
    percentagePosition === PercentagePosition.Left ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: start;
`;

export const StyledBackgroundCircle = styled.div<{
  displayPercentage: boolean;
  percentagePosition: PercentagePosition;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes['5xs'].value};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.colours.support['20'].value};
  outline-width: ${({ theme }) => theme.sizes['5xs'].value};
  outline-style: solid;
  outline-color: ${({ theme }) => theme.colors.colours.support['60'].value};
  margin-left: ${({ theme, displayPercentage, percentagePosition }) =>
    displayPercentage && percentagePosition === PercentagePosition.Left ? theme.sizes['2xs'].value : 0};
  margin-right: ${({ theme, displayPercentage, percentagePosition }) =>
    displayPercentage && percentagePosition === PercentagePosition.Right ? theme.sizes['2xs'].value : 0};
`;

export const StyledForegroundCircle = styled.div<{
  displayValue: number;
  foregroundColor: ForegroundCircleColor;
}>`
  --background-color: ${({ foregroundColor, theme }) => {
    switch (foregroundColor) {
      case ForegroundCircleColor.DigitalBlack: {
        return theme.colors.colours.default[foregroundColor].value;
      }
      case ForegroundCircleColor.Close:
      case ForegroundCircleColor.Hold:
      case ForegroundCircleColor.Live:
      case ForegroundCircleColor.Multiple:
      case ForegroundCircleColor.Parked:
      case ForegroundCircleColor.Update: {
        return theme.colors.colours.information[foregroundColor].value;
      }
      case ForegroundCircleColor.Notification: {
        return theme.colors.colours.system['notification-strong'].value;
      }
      case ForegroundCircleColor.Support80: {
        return theme.colors.colours.support['80'].value;
      }
      case ForegroundCircleColor.Support100: {
        return theme.colors.colours.support['100'].value;
      }
      case ForegroundCircleColor.ThemePrimary:
      case ForegroundCircleColor.ThemeSecondary: {
        return theme.colors.theme[foregroundColor].value;
      }
      default: {
        const exhaustiveCheck: never = foregroundColor;
        return exhaustiveCheck;
      }
    }
  }};
  --degree-value: ${({ displayValue }) => `${displayValue * 3.6}deg`};
  background: conic-gradient(var(--background-color) var(--degree-value), transparent var(--degree-value));
  width: ${({ theme }) => theme.sizes.s.value};
  height: ${({ theme }) => theme.sizes.s.value};
  border-radius: 50%;
`;
