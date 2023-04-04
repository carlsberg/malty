import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledBackgroundCircle, StyledForegroundCircle, StyledWrapper } from './ProgressCircle.styled';
import { ForegroundCircleColor, PercentagePosition, ProgressCircleProps } from './ProgressCircle.types';

export const ProgressCircle = ({
  foregroundColor = ForegroundCircleColor.DigitalBlack,
  displayPercentage = true,
  percentage,
  percentagePosition = PercentagePosition.Left
}: ProgressCircleProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const truncatedPercentage = Math.trunc(percentage);

  let displayValue: number;
  let label = `${truncatedPercentage} %`;
  if (Number.isNaN(truncatedPercentage)) {
    displayValue = 0;
    label = 'Error';
  } else if (truncatedPercentage > 100) {
    displayValue = 100;
  } else if (truncatedPercentage < 0) {
    displayValue = 0;
  } else {
    displayValue = truncatedPercentage;
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
