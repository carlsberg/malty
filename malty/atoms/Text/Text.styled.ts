import { space, SpaceProps } from '@carlsberggroup/malty.utils.space';
import styled, { css } from 'styled-components';
import { TextAlign, TextColor, TextStyle } from './Text.types';

type StyledParagraphProps = {
  textStyle: TextStyle;
  color: TextColor;
  align: TextAlign;
  italic: boolean;
  ellipsis?: boolean;
  width?: string;
  className?: string;
} & SpaceProps;

export const StyledParagraph = styled.p<StyledParagraphProps>`
  display: block;
  margin: 0;
  padding: 0;
  word-break: break-word;
  color: ${({ color, theme }) => theme.colors['text-colours'][color].value};
  ${({ theme, textStyle }) =>
    css`
      font-family: ${theme.typography.desktop.text[textStyle]['font-family'].value};
      font-size: ${theme.typography.desktop.text[textStyle]['font-size'].value};
      letter-spacing: ${theme.typography.desktop.text[textStyle]['letter-spacing'].value};
      line-height: ${theme.typography.desktop.text[textStyle]['line-height'].value};
      font-weight: ${theme.typography.desktop.text[textStyle]['font-weight'].value};
    `}
  text-align: ${({ align }) => align ?? TextAlign.Left};
  ${({ theme, textStyle }) =>
    theme.typography.desktop.text[textStyle]['text-transform']?.value &&
    css`
      text-transform: ${theme.typography.desktop.text[textStyle]['text-transform']?.value};
    `}
  ${({ theme, textStyle }) =>
    theme.typography.desktop.text[textStyle]['text-decoration']?.value &&
    css`
      text-decoration: ${theme.typography.desktop.text[textStyle]['text-decoration']?.value};
    `}
  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
  ${({ width }) =>
    width !== undefined &&
    css`
      display: block;
      width: ${width};
    `}
  ${({ textStyle, theme }) => css`
    @media screen and (max-width: ${theme.layout.small['device-max-width']?.value}) {
      ${css`
        font-family: ${theme.typography.tablet.text[textStyle]['font-family'].value};
        font-size: ${theme.typography.tablet.text[textStyle]['font-size'].value};
        letter-spacing: ${theme.typography.tablet.text[textStyle]['letter-spacing'].value};
        line-height: ${theme.typography.tablet.text[textStyle]['line-height'].value};
        font-weight: ${theme.typography.tablet.text[textStyle]['font-weight'].value};
      `}
      ${theme.typography.tablet.text[textStyle]['text-transform']?.value &&
      css`
        text-transform: ${theme.typography.tablet.text[textStyle]['text-transform']?.value};
      `}
      ${theme.typography.tablet.text[textStyle]['text-decoration']?.value &&
      css`
        text-decoration: ${theme.typography.tablet.text[textStyle]['text-decoration']?.value};
      `}
    }
    @media screen and (max-width: ${theme.layout.xsmall['device-max-width']?.value}) {
      ${css`
        font-family: ${theme.typography.mobile.text[textStyle]['font-family'].value};
        font-size: ${theme.typography.mobile.text[textStyle]['font-size'].value};
        letter-spacing: ${theme.typography.mobile.text[textStyle]['letter-spacing'].value};
        line-height: ${theme.typography.mobile.text[textStyle]['line-height'].value};
        font-weight: ${theme.typography.mobile.text[textStyle]['font-weight'].value};
      `}
      ${theme.typography.mobile.text[textStyle]['text-transform']?.value &&
      css`
        text-transform: ${theme.typography.mobile.text[textStyle]['text-transform']?.value};
      `}
      ${theme.typography.mobile.text[textStyle]['text-decoration']?.value &&
      css`
        text-decoration: ${theme.typography.mobile.text[textStyle]['text-decoration']?.value};
      `}
    }
  `}

  ${space}
`;
