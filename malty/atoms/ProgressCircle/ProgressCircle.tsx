import { TextAlign, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  pxToInt,
  usePieChart,
  usePiePercentageAndLabel,
  useRoundPercentage,
  useSegmentColor
} from './ProgressCircle.helper';
import { StyledBackgroundCircle, StyledLabel, StyledSvg, StyledWrapper } from './ProgressCircle.styled';
import { ForegroundCircleColor, PercentagePosition, ProgressCircleProps, RoundMethod } from './ProgressCircle.types';

export const ProgressCircle = ({
  displayPercentage = true,
  errorLabel = 'Error',
  foregroundColor = ForegroundCircleColor.DigitalBlack,
  percentage,
  percentagePosition = PercentagePosition.Left,
  roundMethod = RoundMethod.Up,
  ...props
}: ProgressCircleProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const pieDiameterInPx = theme.sizes.s.value;
  const pieDiameter = pxToInt(pieDiameterInPx);

  const roundPercentage = useRoundPercentage({ percentage, roundMethod });
  const { label, piePercentage } = usePiePercentageAndLabel({ errorLabel, percentage: roundPercentage });
  const { baseRadius, fullCircleLength, pieRadius, segmentLength } = usePieChart({
    diameter: pieDiameter,
    percentage: piePercentage
  });
  const segmentColor = useSegmentColor({ foregroundColor });

  return (
    <StyledWrapper theme={theme} percentagePosition={percentagePosition} {...props}>
      {displayPercentage && (
        <StyledLabel
          theme={theme}
          textStyle={TextStyle.MediumSmallBold}
          color={TextColor.Support80}
          forwardedAs="span"
          align={percentagePosition === PercentagePosition.Left ? TextAlign.Right : TextAlign.Left}
        >
          {label}
        </StyledLabel>
      )}
      <StyledBackgroundCircle
        theme={theme}
        diameter={pieDiameterInPx}
        displayPercentage={displayPercentage}
        percentagePosition={percentagePosition}
      >
        <StyledSvg viewBox={`0 0 ${pieDiameter} ${pieDiameter}`}>
          <circle
            fill="transparent"
            cx={pieRadius}
            cy={pieRadius}
            r={baseRadius}
            stroke={segmentColor}
            strokeDasharray={`${segmentLength} ${fullCircleLength}`}
            strokeWidth={pieRadius}
          />
        </StyledSvg>
      </StyledBackgroundCircle>
    </StyledWrapper>
  );
};
