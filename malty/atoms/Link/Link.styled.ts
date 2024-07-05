import { space } from '@carlsberg/malty.utils.space';
import styled, { css } from 'styled-components';
import { LinkColor, StyledAnchorProps } from './Link.types';

export const StyledAnchor = styled.a<StyledAnchorProps>`
  ${({ theme, $linkStyle }) =>
    css`
      font-family: ${theme.typography.desktop.text[$linkStyle]['font-family'].value};
      font-size: ${theme.typography.mobile.text[$linkStyle]['font-size'].value};
      letter-spacing: ${theme.typography.mobile.text[$linkStyle]['letter-spacing'].value};
      line-height: ${theme.typography.mobile.text[$linkStyle]['line-height'].value};
      font-weight: ${theme.typography.mobile.text[$linkStyle]['font-weight'].value};

      @media screen and (min-width: ${theme.layout.small['device-max-width']?.value}) {
        font-size: ${theme.typography.tablet.text[$linkStyle]['font-size'].value};
        letter-spacing: ${theme.typography.tablet.text[$linkStyle]['letter-spacing'].value};
        line-height: ${theme.typography.tablet.text[$linkStyle]['line-height'].value};
        font-weight: ${theme.typography.tablet.text[$linkStyle]['font-weight'].value};
      }

      @media screen and (min-width: ${theme.layout.medium['device-max-width']?.value}) {
        font-size: ${theme.typography.desktop.text[$linkStyle]['font-size'].value};
        letter-spacing: ${theme.typography.desktop.text[$linkStyle]['letter-spacing'].value};
        line-height: ${theme.typography.desktop.text[$linkStyle]['line-height'].value};
        font-weight: ${theme.typography.desktop.text[$linkStyle]['font-weight'].value};
      }
    `}

  text-decoration: underline;
  color: ${({ $color, theme }) =>
    $color !== LinkColor.Primary ? theme.colors['text-colours'][$color].value : theme.colors.theme.themePrimary.value};
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.25;
      cursor: default;
      pointer-events: none;
      &:hover {
        opacity: 0.25;
      }
    `};

  ${space}
`;
