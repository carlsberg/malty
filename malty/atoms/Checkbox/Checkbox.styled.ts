import { Icon } from '@carlsberggroup/malty.atoms.icon';
import { Text } from '@carlsberggroup/malty.atoms.text';
import styled, { css } from 'styled-components';

export const StyledCheckboxContainer = styled.div<{
  fullWidth?: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledHiddenIcon = styled(Icon)`
  position: absolute;
  opacity: 0;
  margin-right: '-' + ${({ theme }) => theme.sizes.m.value};
`;

export const StyledLabel = styled.label<{
  disabled?: boolean;
  required?: boolean;
}>`
  display: flex;
  align-items: center;
  height: 100%;

  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;

      &:hover ${StyledHiddenIcon} {
        opacity: 1;

        & + svg {
          visibility: hidden;
        }
      }
    `}

  ${({ required }) =>
    required &&
    css`
      &::after {
        content: '*';
        color: ${({ theme }) => theme.colors.colours.system.fail.value};
        margin-left: ${({ theme }) => theme.sizes['3xs'].value};
      }
    `}
`;

export const StyledText = styled(Text)`
  margin-left: ${({ theme }) => theme.sizes['2xs'].value};
`;

export const StyledError = styled(Text)`
  margin-left: ${({ theme }) => theme.sizes['4xs'].value};
`;
