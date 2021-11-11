import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledStepperProcessCircle,
  StyledStepperProcessContainer,
  StyledStepperProcessLine,
  StyledStepperProcessStep
} from './StepperProcess.styled';
import { StepperProcessProps } from './StepperProcess.types';

export const StepperProcess = ({ steps, currentStep }: StepperProcessProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [elHtml, setElHtml] = useState([<></>]);

  useEffect(() => {
    for (let step = 1; step <= steps; step++) {
      setElHtml((prevState: Array<JSX.Element>) => [
        ...prevState,
        <StyledStepperProcessStep key={`progressStep_${step}`}>
          <StyledStepperProcessCircle
            key={`progressStep_circle_${step}`}
            active={currentStep >= step}
          ></StyledStepperProcessCircle>
          {step < steps && (
            <StyledStepperProcessLine
              key={`progressStep_line_${step}`}
              active={currentStep > step}
            ></StyledStepperProcessLine>
          )}
        </StyledStepperProcessStep>
      ]);
    }
  }, [steps, currentStep]);

  return <StyledStepperProcessContainer theme={theme}>{elHtml}</StyledStepperProcessContainer>;
};
