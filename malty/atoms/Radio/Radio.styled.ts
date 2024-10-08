import { Label } from '@carlsberg/malty.atoms.label';
import { space, SpaceProps } from '@carlsberg/malty.utils.space';
import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div<SpaceProps>`
  ${space}
`;

export const StyledRadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRadio = styled.input`
  display: inline-block;
  // using hardcoded values due to not having token value and design team thinking on implementation with icons
  height: 18px;
  width: 18px;
  margin: 0;

  position: relative;

  cursor: pointer;

  &:hover {
    &::before {
      background: ${({ theme }) => theme.colors.colours.overlay['digital-black'][75].value};
    }
    &::after {
      ${({ theme }) =>
        theme &&
        css`
          border: ${theme.borders['border-2px--solid']['border-width'].value}
            ${theme.borders['border-2px--solid']['border-style'].value}
            ${theme.colors.colours.overlay['digital-black'][75].value};
        `}
    }
  }

  &::before {
    content: '';
    transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(0, 0);
    left: 5px;
    z-index: 1;

    width: ${({ theme }) => theme.sizes['2xs'].value};
    height: ${({ theme }) => theme.sizes['2xs'].value};

    background: ${({ theme }) => theme.colors.colours.default['digital-black'].value};

    border-radius: 50%;
  }

  &:checked {
    &::before {
      transform: translateY(-50%) scale(1, 1);
    }
  }

  &::after {
    content: '';

    position: absolute;
    // using hardcoded values due to not having token value and design team thinking on implementation with icons
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.colours.default.white.value};
    ${({ theme }) =>
      theme &&
      css`
        border: ${theme.borders['border-2px--solid']['border-width'].value}
          ${theme.borders['border-2px--solid']['border-style'].value}
          ${theme.colors.colours.default['digital-black'].value};
      `}
    border-radius: 50%;
  }

  ${({ readOnly }) => {
    return (
      readOnly &&
      css`
        cursor: default;
        &::before,
        &:hover::before {
          background: ${({ theme }) => theme.colors.colours.support['80'].value};
        }
        &::after,
        &:hover::after {
          border-color: ${({ theme }) => theme.colors.colours.support['80'].value};
        }
      `
    );
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      &::before,
      &:hover::before {
        background: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
      }
      &::after,
      &:hover::after {
        border-color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
      }
    `}
`;

export const StyledLabel = styled(Label)<{
  $readOnly?: boolean;
}>`
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-family'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['line-height'].value};
  font-weight: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-weight'].value};
  // using hardcoded values due to not having token value and design team thinking on implementation with icons
  padding-left: 10px;
  margin-bottom: 0;
  cursor: pointer;

  ${({ $readOnly, disabled }) =>
    $readOnly &&
    !disabled &&
    css`
      cursor: default;
      color: ${({ theme }) => theme.colors.colours.support['80'].value};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}
`;

export const StyledError = styled.label`
  color: ${({ theme }) => theme.colors.colours.system.fail.value};
  font-family: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-family'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-size'].value};
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.desktop.text.tiny_default['line-height'].value};
  letter-spacing: 0;
`;
