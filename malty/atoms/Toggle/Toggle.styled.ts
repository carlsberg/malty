import { Label } from '@carlsberg/malty.atoms.label';
import { space, SpaceProps } from '@carlsberg/malty.utils.space';
import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div<SpaceProps>`
  display: flex;
  flex-direction: column;

  ${space}
`;

export const StyledError = styled.label`
  color: ${({ theme }) => theme.colors.colours.system.fail.value};
  font-family: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-family'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-size'].value};
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.desktop.text.tiny_default['line-height'].value};
  letter-spacing: 0;
`;

export const StyledLabelWrapper = styled.div<{
  disabled?: boolean;
}>`
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  // using hardcoded values due to not having token value and design team thinking on implementation with icons
  height: 14px;
  position: relative;
  width: auto;
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}
  &:focus,
  &:focus-visible {
    box-shadow: none;
    outline: none;
  }

  ${({ theme }) =>
    theme &&
    css`
      &:hover {
        input:checked + ${StyledSwitch} {
          background-color: ${theme.colors.colours.overlay['digital-black'][75].value};
          border-color: transparent;
        }

        ${StyledSwitch} {
          border-color: ${theme.colors.colours.overlay['digital-black'][75].value};

          &::before {
            border-color: ${theme.colors.colours.overlay['digital-black'][75].value};
          }
        }
      }
    `}
`;
export const StyledToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.sizes.m.value};
  // using hardcoded values due to not having token value and design team thinking on implementation with icons
  height: 14px;
  &:focus,
  &:focus-visible {
    box-shadow: none;
    outline: none;
  }
`;
export const StyledLabel = styled(Label)<{
  disabled?: boolean;
  required?: boolean;
}>`
  cursor: pointer;
  font-weight: normal;
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-family'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['line-height'].value};
  margin-left: ${({ theme }) => theme.sizes['2xs'].value};
  margin-bottom: 0;
`;

export const StyledSwitch = styled.span<{
  disabled?: boolean;
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  border-radius: ${({ theme }) => theme.sizes.m.value};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: transform 0.3s ease-out;

  ${({ theme }) =>
    theme &&
    css`
      border: ${theme.borders['border-2px--solid']['border-width'].value}
        ${theme.borders['border-2px--solid']['border-style'].value}
        ${theme.colors.colours.default['digital-black'].value};
    `}

  &::before {
    position: absolute;
    content: '';
    left: -2px;
    top: -1px;
    width: ${({ theme }) => theme.sizes['2xs'].value};
    height: ${({ theme }) => theme.sizes['2xs'].value};
    background-color: ${({ theme }) => theme.colors.colours.default.white.value};

    border-radius: 50%;
    transition: transform 0.3s ease-out;
    ${({ theme }) =>
      theme &&
      css`
        border: ${theme.borders['border-2px--solid']['border-width'].value}
          ${theme.borders['border-2px--solid']['border-style'].value}
          ${theme.colors.colours.default['digital-black'].value};
      `}
  }
  ${({ disabled, theme }) =>
    disabled &&
    css`
      &::before {
        border-color: ${theme.colors.colours.system['disable-light-theme'].value};
        pointer-events: none;
      }
      pointer-events: none;
      border-color: ${theme.colors.colours.system['disable-light-theme'].value};
    `}
`;

export const StyledInput = styled.input<{
  disabled?: boolean;
}>`
  display: none;
  &:checked + ${StyledSwitch}::before {
    transform: translateX(14px);
    background-color: ${({ theme }) => theme.colors.colours.default.white.value};
    border: none;
    top: 1px;
  }
  &:checked + ${StyledSwitch} {
    background-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  }
  &:focus,
  &:focus-visible {
    box-shadow: none;
    outline: none;
  }
  ${({ disabled, theme }) =>
    disabled &&
    css`
      &:checked + ${StyledSwitch} {
        background-color: ${theme.colors.colours.system['disable-light-theme'].value};
        pointer-events: none;
        border-color: transparent;
      }
    `}
`;
