import { Text } from '@carlsberggroup/malty.atoms.text';
import { space, SpaceProps } from '@carlsberggroup/malty.utils.space';
import styled, { css } from 'styled-components';

type StyledCheckboxContainerProps = {
  fullWidth?: boolean;
} & SpaceProps;

export const StyledCheckboxContainer = styled.div<StyledCheckboxContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

  ${space}
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

      &:hover svg {
        ${({ theme }) => {
          const hoverColor = theme.colors.colours.overlay['digital-black'][50].value;

          return css`
            fill: ${hoverColor};
            color: ${hoverColor};
          `;
        }};
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

export const StyledInput = styled.input`
  display: none;
`;

export const StyledSpan = styled.span`
  height: ${({ theme }) => theme.sizes.m.value};
`;

export const StyledText = styled(Text)`
  margin-left: ${({ theme }) => theme.sizes['2xs'].value};
`;

export const StyledError = styled(Text)`
  margin-left: ${({ theme }) => theme.sizes['4xs'].value};
`;
