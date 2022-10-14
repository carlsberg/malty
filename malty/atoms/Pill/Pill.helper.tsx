import { IconColor } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IconTextColorProps, PillColor, PillSize, UsePillStylesProps } from './Pill.types';

export const usePillStyles = ({ size }: UsePillStylesProps) => {
  const theme = useContext(ThemeContext);

  const pillStyles = {
    [PillSize.ExtraSmall]: {
      numSize: theme.sizes.s.value,
      fontSize: theme.typography.desktop.text.micro_bold['font-size'].value,
      iconSize: theme.sizes.xs.value,
      padding: theme.sizes['3xs'].value,
      marginText: theme.sizes['5xs'].value
    },
    [PillSize.Small]: {
      numSize: theme.sizes.m.value,
      fontSize: theme.typography.desktop.text.tiny_bold['font-size'].value,
      iconSize: theme.sizes.s.value,
      padding: theme.sizes.xs.value,
      marginText: theme.sizes['4xs'].value
    },
    [PillSize.Medium]: {
      numSize: theme.sizes.l.value,
      fontSize: theme.typography.desktop.text['medium-small_bold']['font-size'].value,
      iconSize: theme.sizes.m.value,
      padding: theme.sizes.s.value,
      marginText: theme.sizes['4xs'].value
    }
  };

  return {
    ...pillStyles[size]
  };
};

export const iconTextColor = ({ color }: IconTextColorProps) => {
  if (color === PillColor.Archive || color === PillColor.Success || color === PillColor.alertStrong) {
    return IconColor.DigitalBlack;
  }

  return IconColor.White;
};
