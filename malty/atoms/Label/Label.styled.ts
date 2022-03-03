import styled, { css } from 'styled-components';

export const StyledLabel = styled.label<{
  htmlFor?: string;
  checkbox?: boolean;
  block?: boolean;
  disabled?: boolean;
}>`
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.desktop.text.small_default['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text.small_default['line-height'].value};
  font-weight: bold;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.colours.support[80].value : theme.colors.colours.default['digital-black'].value};
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  .label__text {
    margin: ${({ checkbox, theme }) =>
      checkbox ? `0 0 0 ${theme.sizes['2xs'].value}` : `0 ${theme.sizes['2xs'].value} ${theme.sizes['2xs'].value} 0`};
    ${({ htmlFor, checkbox }) => {
      const disp = htmlFor && checkbox ? 'inline-block' : 'block';
      return css`
        display: ${checkbox ? 'inline-block' : disp};
      `;
    }}
  }
  input:not([type='checkbox']),
  meter,
  progress,
  select,
  textarea {
    display: block;
  }
`;
