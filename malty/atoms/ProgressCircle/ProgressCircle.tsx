import { Text, TextAlign, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useDegreeValueAndLabel, useRoundPercentage, useSegmentColor } from './ProgressCircle.helper';
import { StyledBackgroundCircle, StyledForegroundCircle, StyledWrapper } from './ProgressCircle.styled';
import { ForegroundCircleColor, PercentagePosition, ProgressCircleProps, RoundMethod } from './ProgressCircle.types';

export const ProgressCircle = ({
  foregroundColor = ForegroundCircleColor.DigitalBlack,
  displayPercentage = true,
  errorLabel = 'Error',
  percentage,
  percentagePosition = PercentagePosition.Left,
  roundMethod = RoundMethod.Up
}: ProgressCircleProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const roundPercentage = useRoundPercentage({ percentage, roundMethod });
  const { degreeValue, label } = useDegreeValueAndLabel({ percentage: roundPercentage, errorLabel });
  const segmentColor = useSegmentColor({ foregroundColor, theme });

  return (
    <StyledWrapper theme={theme} percentagePosition={percentagePosition}>
      {displayPercentage && (
        <Text
          textStyle={TextStyle.MediumSmallBold}
          color={TextColor.Support80}
          as="span"
          className="label"
          align={percentagePosition === PercentagePosition.Left ? TextAlign.Right : TextAlign.Left}
        >
          {label}
        </Text>
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
