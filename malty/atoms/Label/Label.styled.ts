import { space } from '@carlsberg/malty.utils.space';
import styled, { css } from 'styled-components';
import { StyledLabelProps } from './Label.types';

export const StyledLabel = styled.label<StyledLabelProps>`
  font-family: ${({ theme }) => theme.typography.desktop.text.small_bold['font-family'].value};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.small_bold['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text.small_bold['line-height'].value};
  margin-bottom: ${({ theme }) => theme.sizes['2xs'].value};
  font-weight: ${({ theme }) => theme.typography.desktop.text.small_bold['font-weight'].value};
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

  ${space}
`;
