import styled, { css } from 'styled-components';

export const StyledLabel = styled.label<{
  disabled?: boolean;
  required?: boolean;
}>`
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.small_default['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text.small_default['line-height'].value};
  margin-bottom: ${({ theme }) => theme.sizes['2xs'].value};
  font-weight: bold;
  display: inline-block;
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    `}
  ${({ required }) =>
    required &&
    css`
      &::after {
        content: ' *';
        color: ${({ theme }) => theme.colors.colours.system.fail.value};
      }
    `}
`;
