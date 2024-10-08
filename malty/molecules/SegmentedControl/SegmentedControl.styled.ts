import { space, SpaceProps } from '@carlsberg/malty.utils.space';
import styled from 'styled-components';

export const StyledSegmentedControl = styled.div<SpaceProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${space}
`;
export const StyledDivider = styled.div<{
  disabled: boolean;
}>`
  display: flex;
  align-self: stretch;

  width: 1px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.colours.overlay['digital-black'][10].value : theme.colors.colours.support[40].value};
`;
