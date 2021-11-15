import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledStepperProcessCircle,
  StyledStepperProcessContainer,
  StyledStepperProcessLine,
  StyledStepperProcessNumber
} from './StepperProcess.styled';
import { StepperProcessProps } from './StepperProcess.types';

export const StepperProcess = ({ steps, currentStep, isMultiStep }: StepperProcessProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [elHtml, setElHtml] = useState([<></>]);

  useEffect(() => {
    for (let step = 1; step <= steps; step++) {
      setElHtml((prevState: Array<JSX.Element>) => [
        ...prevState,
        <>
          <StyledStepperProcessCircle
            key={`progressStep_circle_${step}`}
            active={currentStep >= step}
            currentStep={currentStep == step}
          >
            <>
              {(currentStep > step) && (
                <Icon name={IconNamesTypes.ItemCheckFilled} size={IconSizesTypes.Small} color={IconColors.Primary} />
              )}
              {(currentStep <= step && !isMultiStep) && (
                <StyledStepperProcessNumber active={currentStep >= step}>
                  { step }
                </StyledStepperProcessNumber>
              )}
            </>
          </StyledStepperProcessCircle>
          {step < steps && (
            <StyledStepperProcessLine
              key={`progressStep_line_${step}`}
              active={currentStep > step && !isMultiStep}
            ></StyledStepperProcessLine>
          )}
        </>
      ]);
    }
  }, [steps, currentStep]);

  return <StyledStepperProcessContainer theme={theme}>{elHtml}</StyledStepperProcessContainer>;
};
