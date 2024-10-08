/* eslint-disable no-loop-func, react/jsx-no-useless-fragment */
import { IconSize } from '@carlsberg/malty.atoms.base-icon';
import { Text, TextColor, TextStyle } from '@carlsberg/malty.atoms.text';
import { ItemCheckFilled } from '@carlsberg/malty.icons.item-check-filled';
import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledStep,
  StyledStepperCircle,
  StyledStepperContainer,
  StyledStepperLine,
  StyledStepperNumber,
  StyledText
} from './Stepper.styled';
import { StepperProps } from './Stepper.types';

export const Stepper = ({ steps, currentStep, isMultiStep, dataQaId, ...props }: StepperProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [elHtml, setElHtml] = useState([<></>]);

  useEffect(() => {
    if (Array.isArray(steps)) {
      steps.map((step, index) =>
        setElHtml((prevState: Array<JSX.Element>) => [
          ...prevState,
          // eslint-disable-next-line react/jsx-fragments
          <React.Fragment key={`step_${step.key}`}>
            <StyledStep data-testid={`${dataQaId}-${index}`} theme={theme}>
              <StyledStepperCircle
                key={`progressStep_circle_${step.key}`}
                active={currentStep >= index + 1}
                currentStep={currentStep === index + 1}
                theme={theme}
              >
                <>
                  {currentStep > index + 1 && <ItemCheckFilled size={IconSize.Small} />}
                  {currentStep <= index + 1 && !isMultiStep && (
                    <StyledStepperNumber theme={theme} active={currentStep >= index + 1}>
                      {index + 1}
                    </StyledStepperNumber>
                  )}
                </>
              </StyledStepperCircle>
              <StyledText theme={theme}>
                <Text
                  dataTestId={`${dataQaId}-${index}-text`}
                  textStyle={TextStyle.MicroBold}
                  color={currentStep >= index + 1 ? TextColor.DigitalBlack : TextColor.Support60}
                >
                  {step.label}
                </Text>
              </StyledText>
            </StyledStep>
            {index + 1 < steps.length && (
              <StyledStepperLine key={`progressStep_line_${step.key}`} theme={theme} active={currentStep > index + 1} />
            )}
          </React.Fragment>
        ])
      );
    } else {
      for (let step = 1; step <= steps; step++) {
        setElHtml((prevState: Array<JSX.Element>) => [
          ...prevState,
          <React.Fragment key={`step_${step}`}>
            <StyledStep data-testid={`${dataQaId}-${step}`} theme={theme}>
              <StyledStepperCircle
                key={`progressStep_circle_${step}`}
                active={currentStep >= step}
                currentStep={currentStep === step}
                theme={theme}
              >
                <>
                  {currentStep > step && <ItemCheckFilled size={IconSize.Small} />}
                  {currentStep <= step && !isMultiStep && (
                    <StyledStepperNumber theme={theme} active={currentStep >= step}>
                      {step}
                    </StyledStepperNumber>
                  )}
                </>
              </StyledStepperCircle>
            </StyledStep>
            {step < steps && (
              <StyledStepperLine key={`progressStep_line_${step}`} theme={theme} active={currentStep > step} />
            )}
          </React.Fragment>
        ]);
      }
    }

    return () => {
      setElHtml([<></>]);
    };
  }, [steps, currentStep]);

  return (
    <StyledStepperContainer data-testid={dataQaId} theme={theme} {...props}>
      {elHtml.map((el) => (
        <React.Fragment key={el.key}>{el}</React.Fragment>
      ))}
    </StyledStepperContainer>
  );
};
