import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.base-icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IconTextColorProps, PillSize, PillType, UsePillStylesProps } from './Pill.types';

export const usePillStyles = ({ size }: UsePillStylesProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const pillStyles = {
    [PillSize.ExtraSmall]: {
      numSize: theme.sizes.ms.value,
      fontSize: theme.typography.desktop.text.tiny_bold['font-size'].value,
      fontFamily: theme.typography.desktop.text.tiny_bold['font-family'].value,
      iconSize: IconSize.ExtraSmall,
      padding: theme.sizes['3xs'].value,
      gap: theme.sizes['4xs'].value
    },
    [PillSize.Small]: {
      numSize: theme.sizes.m.value,
      fontSize: theme.typography.desktop.text.tiny_bold['font-size'].value,
      fontFamily: theme.typography.desktop.text.tiny_bold['font-family'].value,
      iconSize: IconSize.Small,
      padding: theme.sizes['2xs'].value,
      gap: theme.sizes['3xs'].value
    },
    [PillSize.Medium]: {
      numSize: theme.sizes.l.value,
      fontSize: theme.typography.desktop.text['medium-small_bold']['font-size'].value,
      fontFamily: theme.typography.desktop.text['medium-small_bold']['font-family'].value,
      iconSize: IconSize.Medium,
      padding: theme.sizes.xs.value,
      gap: theme.sizes['2xs'].value
    }
  };

  return pillStyles[size];
};

export const useIconTextColor = ({ type }: IconTextColorProps) => {
  if (
    type === PillType.Archive ||
    type === PillType.Success ||
    type === PillType.SuccessLight ||
    type === PillType.AlertStrong ||
    type === PillType.AlertLight ||
    type === PillType.NotificationLight
  ) {
    return IconColor.DigitalBlack;
  }

  return IconColor.White;
};
