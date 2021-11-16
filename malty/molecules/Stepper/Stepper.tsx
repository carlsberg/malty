import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledStepperCircle,
  StyledStepperContainer,
  StyledStepperLine,
  StyledStepperNumber
} from './Stepper.styled';
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
            currentStep={currentStep == step}
          >
            <>
              {(currentStep > step) && (
                <Icon name={IconNamesTypes.ItemCheckFilled} size={IconSizesTypes.Small} color={IconColors.Primary} />
              )}
              {(currentStep <= step && !isMultiStep) && (
                <StyledStepperNumber active={currentStep >= step}>
                  { step }
                </StyledStepperNumber>
              )}
            </>
          </StyledStepperCircle>
          {step < steps && (
            <StyledStepperLine
              key={`progressStep_line_${step}`}
              active={currentStep > step && !isMultiStep}
            ></StyledStepperLine>
          )}
        </>
      ]);
    }
  }, [steps, currentStep]);

  return <StyledStepperContainer theme={theme}>{elHtml}</StyledStepperContainer>;
};
