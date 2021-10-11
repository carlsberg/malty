import styled, { css } from 'styled-components';

export const StyledLabel = styled.label<{
  htmlFor?: string;
  checkbox?: boolean;
  block?: boolean;
  disabled?: boolean;
}>`
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.information.small['font-size'].value}px;
  line-height: ${({ theme }) => theme.typography.information.small['line-height'].value}px;
  font-weight: bold;
  color: ${({ theme, disabled }) => (disabled ? theme.color.support.support80.value : theme.color.default.value)};
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  .label__text {
    margin: ${({ checkbox }) => (checkbox ? '0 0 0 8px' : '0 8px 8px 0')};
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
