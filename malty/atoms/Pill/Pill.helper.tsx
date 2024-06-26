import { IconColor, IconSize } from '@carlsberggbs/malty.atoms.base-icon';
import { defaultTheme } from '@carlsberggbs/malty.theme.new-malty-theme-provider';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IconTextColorProps, PillSize, PillType, UsePillBackgroundColorProps, UsePillStylesProps } from './Pill.types';

export const usePillStyles = ({ size }: UsePillStylesProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const pillStyles = {
    [PillSize.ExtraSmall]: {
      numSize: theme.sizesV2.s,
      fontWeight: theme.typographyV2.montserrat.body[10].semibold.fontWeight,
      lineHeight: theme.typographyV2.montserrat.body[10].semibold.lineHeight,
      fontSize: theme.typographyV2.montserrat.body[10].semibold.fontSize,
      iconSize: IconSize.ExtraSmall,
      padding: `${theme.sizesV2['4xs']} ${theme.sizesV2['3xs']}`,
      gap: theme.sizesV2['5xs']
    },
    [PillSize.Small]: {
      numSize: theme.sizesV2.m,
      fontWeight: theme.typographyV2.montserrat.body[10].semibold.fontWeight,
      lineHeight: theme.typographyV2.montserrat.body[10].semibold.lineHeight,
      fontSize: theme.typographyV2.montserrat.body[10].semibold.fontSize,
      iconSize: IconSize.Small,
      padding: `${theme.sizesV2['4xs']} ${theme.sizesV2['3xs']}`,
      gap: theme.sizesV2['4xs']
    },
    [PillSize.Medium]: {
      numSize: theme.sizesV2.xl,
      fontWeight: theme.typographyV2.montserrat.body[14].semibold.fontWeight,
      lineHeight: theme.typographyV2.montserrat.body[14].semibold.lineHeight,
      fontSize: theme.typographyV2.montserrat.body[14].semibold.fontSize,
      iconSize: IconSize.Medium,
      padding: `${theme.sizesV2['4xs']} ${theme.sizesV2['2xs']}`,
      gap: theme.sizesV2['4xs']
    }
  };

  return pillStyles[size];
};

// TODO: Refactor this when the icons are reviewed
export const useIconColor = ({ type }: IconTextColorProps) => {
  if (type === PillType.Archive || type === PillType.Success || type === PillType.Alert) {
    return IconColor.DigitalBlack;
  }

  if (type === PillType.Disabled) {
    return IconColor.Disabled;
  }

  return IconColor.White;
};

export const useTextColor = ({ type }: IconTextColorProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  if (type === PillType.Archive || type === PillType.Success || type === PillType.Alert) {
    return theme.colorsV2.default.content[500];
  }

  if (type === PillType.Disabled) {
    return theme.colorsV2.default.foreground.primary['interactive--disabled'];
  }

  return theme.colorsV2.default.content[100];
};

export const usePillBackgroundColor = ({ type }: UsePillBackgroundColorProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  switch (type) {
    case PillType.Success:
      return theme.colorsV2.default.success[500];
    case PillType.Alert:
      return theme.colorsV2.default.warning[500];
    case PillType.Fail:
      return theme.colorsV2.default.error[600];
    case PillType.Notification:
      return theme.colorsV2.default.information[600];
    case PillType.Archive:
      return theme.colorsV2.default.primary[200];
    case PillType.Secondary:
      return theme.colorsV2.default.primary[400];
    case PillType.Disabled:
      return theme.colorsV2.default.background.primary['interactive--disabled'];
    default:
      return theme.colorsV2.default.content[500];
  }
};
