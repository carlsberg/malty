import styled from 'styled-components';
import { PercentagePosition } from './ProgressCircle.types';

export const StyledWrapper = styled.div<{
  percentagePosition: PercentagePosition;
}>`
  display: flex;
  flex-direction: ${({ percentagePosition }) =>
    percentagePosition === PercentagePosition.Left ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: start;

  .label {
    min-width: ${({ theme }) => theme.sizes.xl.value};
  }
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
  color: string;
  degreeValue: string;
}>`
  background: ${({ color, degreeValue }) => `conic-gradient(${color} ${degreeValue}, transparent ${degreeValue})`};
  width: ${({ theme }) => theme.sizes.s.value};
  height: ${({ theme }) => theme.sizes.s.value};
  border-radius: 50%;
`;
