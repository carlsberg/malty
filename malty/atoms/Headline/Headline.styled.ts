import styled, { css } from 'styled-components';
import { HeadlineAlign, HeadlineColor, HeadlineStyle } from './Headline.types';

export const StyledHeadline = styled.h1<{
  headlineStyle: HeadlineStyle;
  color: HeadlineColor;
  align: HeadlineAlign;
}>`
  margin: 0;
  padding: 0;
  color: ${({ color, theme }) => {
    let tempColor;
    if (color === HeadlineColor.ThemePrimary) {
      tempColor = theme.colors.theme.themePrimary.value;
    } else {
      tempColor = theme.colors['headline-colours'][color].value;
    }
    return tempColor;
  }};
  ${({ theme, headlineStyle }) =>
    css`
      font-family: ${theme.typography.desktop.headline[headlineStyle]['font-family'].value};
      font-size: ${theme.typography.desktop.headline[headlineStyle]['font-size'].value};
      letter-spacing: ${theme.typography.desktop.headline[headlineStyle]['letter-spacing'].value};
      line-height: ${theme.typography.desktop.headline[headlineStyle]['line-height'].value};
      font-weight: ${theme.typography.desktop.headline[headlineStyle]['font-weight'].value};
    `}
  text-align: ${({ align }) => align ?? HeadlineAlign.Left};
  ${({ theme, headlineStyle }) =>
    theme.typography.desktop.headline[headlineStyle]['text-transform']?.value &&
    css`
      text-transform: ${theme.typography.desktop.headline[headlineStyle]['text-transform']?.value};
    `}
  ${({ theme, headlineStyle }) =>
    theme.typography.desktop.headline[headlineStyle]['text-decoration']?.value &&
    css`
      text-decoration: ${theme.typography.desktop.headline[headlineStyle]['text-decoration']?.value};
    `}
  ${({ headlineStyle, theme }) => css`
    @media screen and (max-width: ${theme.layout.small['device-max-width']?.value}) {
      ${css`
        font-family: ${theme.typography.tablet.headline[headlineStyle]['font-family'].value};
        font-size: ${theme.typography.tablet.headline[headlineStyle]['font-size'].value};
        letter-spacing: ${theme.typography.tablet.headline[headlineStyle]['letter-spacing'].value};
        line-height: ${theme.typography.tablet.headline[headlineStyle]['line-height'].value};
        font-weight: ${theme.typography.tablet.headline[headlineStyle]['font-weight'].value};
      `}
      ${theme.typography.tablet.headline[headlineStyle]['text-transform']?.value &&
      css`
        text-transform: ${theme.typography.tablet.headline[headlineStyle]['text-transform']?.value};
      `}
    ${theme.typography.tablet.headline[headlineStyle]['text-decoration']?.value &&
      css`
        text-decoration: ${theme.typography.tablet.headline[headlineStyle]['text-decoration']?.value};
      `}
    }
    @media screen and (max-width: ${theme.layout.xsmall['device-max-width']?.value}) {
      ${css`
        font-family: ${theme.typography.mobile.headline[headlineStyle]['font-family'].value};
        font-size: ${theme.typography.mobile.headline[headlineStyle]['font-size'].value};
        letter-spacing: ${theme.typography.mobile.headline[headlineStyle]['letter-spacing'].value};
        line-height: ${theme.typography.mobile.headline[headlineStyle]['line-height'].value};
        font-weight: ${theme.typography.mobile.headline[headlineStyle]['font-weight'].value};
      `}
      ${theme.typography.mobile.headline[headlineStyle]['text-transform']?.value &&
      css`
        text-transform: ${theme.typography.mobile.headline[headlineStyle]['text-transform']?.value};
      `}
    ${theme.typography.mobile.headline[headlineStyle]['text-decoration']?.value &&
      css`
        text-decoration: ${theme.typography.mobile.headline[headlineStyle]['text-decoration']?.value};
      `}
    }
  `}
  word-break: normal;
  overflow-wrap: anywhere;
`;
