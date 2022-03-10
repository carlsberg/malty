import styled, { css } from 'styled-components';

export const StyledRadio = styled.input`
  display: inline-block;
  height: 18px;
  width: 18px;
  margin: 0;

  position: relative;

  cursor: pointer;
  &:hover {
    &:before {
      background: ${({ theme }) => theme.colors.colours.overlay['digital-black'][75].value};
    }
    &:after {
      ${({ theme }) =>
        theme &&
        css`
          border: ${theme.borders['border-2px--solid']['border-width'].value}
            ${theme.borders['border-2px--solid']['border-style'].value}
            ${theme.colors.colours.overlay['digital-black'][75].value};
        `}
    }
  }

  &:before {
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
    &:before {
      transform: translateY(-50%) scale(1, 1);
    }
  }

  &:after {
    content: '';

    position: absolute;

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

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      &:before {
        background: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
      }
      &:after {
        ${({ theme }) =>
          theme &&
          css`
            background: ${theme.colors.colours.default.white.value};
            border: ${theme.borders['border-2px--solid']['border-width'].value}
              ${theme.borders['border-2px--solid']['border-style'].value}
              ${theme.colors.colours.system['disable-light-theme'].value};
          `}
      }
    `}
`;

export const StyledLabel = styled.label<{
  disabled?: boolean;
}>`
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['line-height'].value};
  font-weight: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-weight'].value};
  padding-left: 10px;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
      pointer-events: none;
    `}
`;
export const StyledError = styled.label`
  font-family: inherit;
  color: ${({ theme }) => theme.colors.colours.system.fail.value};
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-size'].value};
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.desktop.text.tiny_default['line-height'].value};
  letter-spacing: 0;
`;

export const StyledRadioContainer = styled.div`
  display: flex;
  align-items: center;
`;
