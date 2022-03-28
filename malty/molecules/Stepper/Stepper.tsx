/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledStepperCircle, StyledStepperContainer, StyledStepperLine, StyledStepperNumber } from './Stepper.styled';
import { StepperProps } from './Stepper.types';

export const Stepper = ({ steps, currentStep, isMultiStep }: StepperProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [elHtml, setElHtml] = useState([<></>]);

  useEffect(() => {
    for (let step = 1; step <= steps; step++) {
      setElHtml((prevState: Array<JSX.Element>) => [
        ...prevState,
        <>
          <StyledStepperCircle
            key={`progressStep_circle_${step}`}
            active={currentStep >= step}
            currentStep={currentStep === step}
            theme={theme}
          >
            <>
              {currentStep > step && (
                <Icon name={IconName.ItemCheckFilled} size={IconSize.Small} color={IconColor.Primary} />
              )}
              {currentStep <= step && !isMultiStep && (
                <StyledStepperNumber theme={theme} active={currentStep >= step}>
                  {step}
                </StyledStepperNumber>
              )}
            </>
          </StyledStepperCircle>
          {step < steps && (
            <StyledStepperLine
              key={`progressStep_line_${step}`}
              theme={theme}
              active={currentStep > step && !isMultiStep}
            />
          )}
        </>
      ]);
    }
    return () => {
      setElHtml([<></>]);
    };
  }, [steps, currentStep]);

  return <StyledStepperContainer theme={theme}>{elHtml}</StyledStepperContainer>;
};
