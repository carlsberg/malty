import { Text } from '@carlsberggroup/malty.atoms.text';
import { space, SpaceProps } from '@carlsberggroup/malty.utils.space';
import styled from 'styled-components';
import { PercentagePosition } from './ProgressCircle.types';

type StyledWrapperProps = {
  percentagePosition: PercentagePosition;
} & SpaceProps;

export const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: ${({ percentagePosition }) =>
    percentagePosition === PercentagePosition.Left ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: start;

  ${space}
`;

export const StyledBackgroundCircle = styled.div<{
  diameter: string;
  displayPercentage: boolean;
  percentagePosition: PercentagePosition;
}>`
  width: ${({ diameter }) => diameter};
  height: ${({ diameter }) => diameter};
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

export const StyledLabel = styled(Text)`
  min-width: ${({ theme }) => theme.sizes.xl.value};
`;

export const StyledSvg = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  border-radius: 50%;
  display: block;
`;
