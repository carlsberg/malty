import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledBackgroundCircle, StyledForegroundCircle, StyledWrapper } from './ProgressCircle.styled';
import { ForegroundCircleColor, PercentagePosition, ProgressCircleProps, RoundMethod } from './ProgressCircle.types';

export const ProgressCircle = ({
  foregroundColor = ForegroundCircleColor.DigitalBlack,
  displayPercentage = true,
  percentage,
  percentagePosition = PercentagePosition.Left,
  roundMethod = RoundMethod.Up
}: ProgressCircleProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  let roundPercentage;
  switch (roundMethod) {
    case RoundMethod.Down: {
      roundPercentage = Math.floor(percentage);
      break;
    }
    case RoundMethod.Up: {
      roundPercentage = Math.round(percentage);
      break;
    }
    default: {
      const exhaustiveCheck: never = roundMethod;
      return exhaustiveCheck;
    }
  }

  let displayValue: number;
  let label = `${roundPercentage}%`;
  if (Number.isNaN(roundPercentage)) {
    displayValue = 0;
    label = 'Error';
  } else if (roundPercentage > 100) {
    displayValue = 100;
  } else if (roundPercentage < 0) {
    displayValue = 0;
    label = `${Math.abs(roundPercentage)}%`;
  } else {
    displayValue = roundPercentage;
  }

  return (
    <StyledWrapper theme={theme} percentagePosition={percentagePosition}>
      {displayPercentage && (
        <Text textStyle={TextStyle.MediumSmallBold} color={TextColor.Support80} as="span">
          {label}
        </Text>
      )}
      <StyledBackgroundCircle
        theme={theme}
        displayPercentage={displayPercentage}
        percentagePosition={percentagePosition}
      >
        <StyledForegroundCircle theme={theme} displayValue={displayValue} foregroundColor={foregroundColor} />
      </StyledBackgroundCircle>
    </StyledWrapper>
  );
};
