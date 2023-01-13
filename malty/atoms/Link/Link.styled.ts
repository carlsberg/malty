import styled, { css } from 'styled-components';
import { LinkColor, LinkStyle } from './Link.types';

export const StyledAnchor = styled.a<{
  disabled: boolean;
  color: LinkColor;
  linkStyle: LinkStyle;
}>`
  ${({ theme, linkStyle }) =>
    css`
      font-family: ${theme.typography.desktop.text[linkStyle]['font-family'].value};
      font-size: ${theme.typography.desktop.text[linkStyle]['font-size'].value};
      letter-spacing: ${theme.typography.desktop.text[linkStyle]['letter-spacing'].value};
      line-height: ${theme.typography.desktop.text[linkStyle]['line-height'].value};
      font-weight: ${theme.typography.desktop.text[linkStyle]['font-weight'].value};
    `}
  ${({ linkStyle, theme }) => css`
    @media screen and (max-width: ${theme.layout.small['device-max-width']?.value}) {
      ${css`
        font-size: ${theme.typography.tablet.text[linkStyle]['font-size'].value};
        letter-spacing: ${theme.typography.tablet.text[linkStyle]['letter-spacing'].value};
        line-height: ${theme.typography.tablet.text[linkStyle]['line-height'].value};
        font-weight: ${theme.typography.tablet.text[linkStyle]['font-weight'].value};
      `}
    }
    @media screen and (max-width: ${theme.layout.xsmall['device-max-width']?.value}) {
      ${css`
        font-size: ${theme.typography.mobile.text[linkStyle]['font-size'].value};
        letter-spacing: ${theme.typography.mobile.text[linkStyle]['letter-spacing'].value};
        line-height: ${theme.typography.mobile.text[linkStyle]['line-height'].value};
        font-weight: ${theme.typography.mobile.text[linkStyle]['font-weight'].value};
      `}
    }
  `}

  text-decoration: underline;
  color: ${({ color, theme }) =>
    color !== LinkColor.Primary ? theme.colors['text-colours'][color].value : theme.colors.theme.themePrimary.value};
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.25;
      cursor: default;
      pointer-events: none;
      &:hover {
        opacity: 0.25;
      }
    `};
`;
