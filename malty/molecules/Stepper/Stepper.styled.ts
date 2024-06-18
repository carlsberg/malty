/* eslint-disable no-nested-ternary */
import { space, SpaceProps } from '@carlsberggbs/malty.utils.space';
import styled from 'styled-components';

export const StyledStepperContainer = styled.div<SpaceProps>`
  display: flex;
  align-items: baseline;

  ${space}
`;
export const StyledText = styled.div`
  margin-top: ${({ theme }) => theme.sizes['4xs'].value} !important;
  position: absolute;
  white-space: nowrap;

  text-align: center;

  left: 50%;
  top: 16px;
  transform: translatex(-50%);
`;
export const StyledStep = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: auto ${({ theme }) => theme.sizes['4xs'].value};
  position: relative;
`;
export const StyledStepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const StyledStepperCircle = styled.span<{
  active: boolean;
  currentStep: boolean;
}>`
  display: flex;
  justify-content: center;

  width: ${({ theme }) => theme.sizes.s.value};
  height: ${({ theme }) => theme.sizes.s.value};

  border: ${({ theme, active, currentStep }) =>
    currentStep
      ? `${theme.borders['border-2px--solid']['border-style'].value} ${theme.borders['border-2px--solid']['border-width'].value} ${theme.colors.colours.default['digital-black'].value}`
      : active
      ? '0'
      : `${theme.borders['border-2px--solid']['border-style'].value} ${theme.borders['border-2px--solid']['border-width'].value} ${theme.colors.colours.support[60].value}`};
  border-radius: 50%;
  align-items: center;
  margin: auto;
  box-sizing: border-box;
`;

export const StyledStepperNumber = styled.span<{
  active: boolean;
}>`
  font-family: ${({ theme }) => theme.typography.desktop.text.tiny_bold['font-family'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_bold['font-size'].value};
  font-weight: ${({ theme }) => theme.typography.desktop.text.tiny_bold['font-weight'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text.tiny_bold['line-height'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text.tiny_bold['font-family'].value};
  display: flex;
  justify-content: center;
  color: ${({ theme, active }) =>
    active ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[60].value};
`;

export const StyledStepperLine = styled.span<{
  active: boolean;
}>`
  margin-top: ${({ theme }) => theme.sizes['3xs'].value};
  display: inline-block;
  flex: 1;
  height: ${({ theme }) => theme.sizes['4xs'].value};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[60].value};
`;
