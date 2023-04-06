import { TextAlign, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useDegreeValueAndLabel, useRoundPercentage, useSegmentColor } from './ProgressCircle.helper';
import { StyledBackgroundCircle, StyledForegroundCircle, StyledLabel, StyledWrapper } from './ProgressCircle.styled';
import { ForegroundCircleColor, PercentagePosition, ProgressCircleProps, RoundMethod } from './ProgressCircle.types';

export const ProgressCircle = ({
  displayPercentage = true,
  errorLabel = 'Error',
  foregroundColor = ForegroundCircleColor.DigitalBlack,
  percentage,
  percentagePosition = PercentagePosition.Left,
  roundMethod = RoundMethod.Up
}: ProgressCircleProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const roundPercentage = useRoundPercentage({ percentage, roundMethod });
  const { degreeValue, label } = useDegreeValueAndLabel({ percentage: roundPercentage, errorLabel });
  const segmentColor = useSegmentColor({ foregroundColor });

  return (
    <StyledWrapper theme={theme} percentagePosition={percentagePosition}>
      {displayPercentage && (
        <StyledLabel
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
        displayPercentage={displayPercentage}
        percentagePosition={percentagePosition}
      >
        <StyledForegroundCircle theme={theme} degreeValue={degreeValue} color={segmentColor} />
      </StyledBackgroundCircle>
    </StyledWrapper>
  );
};
